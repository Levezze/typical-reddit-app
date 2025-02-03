import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { showPopular, searchValue, changeSearchValue } from "../../../store/slices/searchSlice";
  
export const Search: React.FC = () => {
  const [localSearchValue, setLocalSearchValue] = useState('');
  const dispatch = useDispatch();

  const debouncedHandleSearch = useCallback(
    debounce((searchQuery: string) => {
      dispatch(changeSearchValue(searchQuery));
    }, 500),
    []  
  );

  useEffect(() => {
    return () => {
      debouncedHandleSearch.cancel(); // Cancel the debounce timer on unmount
    };
  }, [debouncedHandleSearch]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setLocalSearchValue(value);
    debouncedHandleSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }
  const updatedSearchValue = useSelector(searchValue);
  const updatedShowPopular = useSelector(showPopular)
  console.log('Updated Search Value: ', updatedSearchValue);
  console.log('Show Popular Subs: ', updatedShowPopular);

  return (
    <div className="search-container">
      <h4>CHOOSE UP TO 5 SUBS</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput" />
        <input 
          onChange={handleSearch} 
          id='searchInput' 
          type='text' 
          spellCheck='false'
          placeholder={
            localSearchValue ? localSearchValue
            : 
            updatedSearchValue ? updatedSearchValue
            : 
            'Search subreddits'
          }
          value={localSearchValue}
          onClick={handleSearch}
          required 
        />
      </form>
    </div>
  )
}
