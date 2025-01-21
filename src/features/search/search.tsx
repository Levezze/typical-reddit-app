import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { showPopular, searchValue, changeSearchValue } from "./searchSlice";
  
export const Search: React.FC = () => {
  const dispatch = useDispatch();

  const debouncedHandleSearch = useCallback(
    debounce((searchQuery: string) => {
      dispatch(changeSearchValue(searchQuery));
    }, 1000),
    []  
  );

  useEffect(() => {
    return () => {
      debouncedHandleSearch.cancel(); // Cancel the debounce timer on unmount
    };
  }, [debouncedHandleSearch]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedHandleSearch(value);
  }

  const updatedSearchValue = useSelector(searchValue);
  const updatedShowPopular = useSelector(showPopular)
  console.log('Updated Search Value: ', updatedSearchValue);
  console.log('Show Popular Subs: ', updatedShowPopular);

  return (
    <>
      <form>
        <label htmlFor="searchInput" />
        <input 
          onChange={handleSearch} 
          id='searchInput' 
          type='text' 
          placeholder='Search subreddits...' 
          required 
        />
      </form>
    </>
  )
}
