import React, { useEffect, useMemo } from 'react'
import { useGetPopularSubredditsQuery, useSearchSubredditsQuery } from '../../services/subredditsAPI'
import { parseSearchData } from '../../utils/parseResponseData';
import { ResponseData, Subreddit } from '../../types/api';
import { Search } from '../../features/search/Search';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { showPopular, searchValue, setSubredditsResults } from '../../features/search/searchSlice';
import { RootState } from '../store/store';
import SubredditSelector from '../../features/subreddits/SubredditSelector';
import SubredditSelectedList from '../../features/subreddits/SubredditSelectedList';

const SubredditsPage: React.FC = () => {
  const dispatch = useDispatch();
  const isShowPopular = useSelector(showPopular, shallowEqual);
  const updatedSearchVal = useSelector(searchValue, shallowEqual);

  const { data: popularData, error: popularError, isLoading: popularIsLoading } = useGetPopularSubredditsQuery(undefined,
    {skip: !isShowPopular}
  );
  const { data: searchData, error: searcHError, isLoading: searchIsLoading } = useSearchSubredditsQuery(updatedSearchVal,
    {skip: isShowPopular || !updatedSearchVal}
  );

  const data = isShowPopular ? popularData : searchData;
  const error = isShowPopular ? popularError : searcHError;
  const isLoading = isShowPopular ? popularIsLoading : searchIsLoading;

  console.log('Data:', data)
  console.log('Error:', error)

  const parsedData: Subreddit[] = useMemo(() => 
    (data ? parseSearchData(data as ResponseData): []), [data]);

  useEffect(()=> {
    dispatch(setSubredditsResults(parsedData));
  },[dispatch, parsedData]);

  const subredditsArray = useSelector((state: RootState) => state.subreddits.selected);
  console.log('Selected: ', subredditsArray);

  return (
    <>
      <Search />
      <div>
        {
          error ? (<p>Error loading subreddits!</p>) 
          :
          isLoading ? (<p>Loading...</p>) 
          :
          <SubredditSelector />
        }
      </div>
      <div>
        <SubredditSelectedList />
      </div>
    </>
  )
}

export default SubredditsPage;
