import React from 'react'
import { useGetPopularSubredditsQuery, useSearchSubredditsQuery } from '../../services/subredditsAPI'
import { responseData } from '../../utils/responseData';
import { ResponseData, Subreddit } from '../../types/api';
import { Search } from '../../features/search/Search';
import SubredditSelector from '../../features/subreddits/SubredditSelector';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { showPopular, searchValue, setSubredditsResults } from '../../features/search/searchSlice';

const SubredditsPage: React.FC = () => {
  const dispatch = useDispatch();
  const isShowPopular = useSelector(showPopular, shallowEqual);
  const updatedSearchVal = useSelector(searchValue, shallowEqual);

  const { data: popularData, error: popularError, isLoading: popularIsLoading } = useGetPopularSubredditsQuery();
  const { data: searchData, error: searcHError, isLoading: searchIsLoading } = useSearchSubredditsQuery(updatedSearchVal);

  const data = isShowPopular ? popularData : searchData;
  const error = isShowPopular ? popularError : searcHError;
  const isLoading = isShowPopular ? popularIsLoading : searchIsLoading;

  console.log('Data:', data)
  console.log('Error:', error)

  const parsedData:Subreddit[] = data ? responseData(data as ResponseData): [];
  dispatch(setSubredditsResults(parsedData));

  return (
    <>
      <Search />
      <div>
        {
          error ? <p>Error loading subreddits!</p> :
          isLoading ? <p>Loading...</p> :
          <SubredditSelector />
        }
      </div>
    </>
  )
}

export default SubredditsPage;
