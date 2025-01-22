import React from 'react'
import { useGetPostsFromSubredditsQuery } from '../../services/feedAPI'
import { responseData } from '../../utils/responseData';
import { ResponseData, Subreddit } from '../../types/api';
import { Search } from '../../features/search/Search';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { showPopular, searchValue, setSubredditsResults } from '../../features/search/searchSlice';
import { RootState } from '../store/store';
import SubredditSelector from '../../features/subreddits/SubredditSelector';
import SubredditSelectedList from '../../features/subreddits/SubredditSelectedList';

const FeedPage: React.FC = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPostsFromSubredditsQuery({ subreddits: ['NoStupidQuestions', 'BaldursGate3', 'factorio'], sort: 'hot'});
  
  console.log('Feed Data:', data)
  console.log('Feed Error:', error)

  // const parsedData:Subreddit[] = data ? responseData(data as ResponseData): [];
  // dispatch(setSubredditsResults(parsedData));

  // const subredditsArray = useSelector((state: RootState) => state.subreddits.selected);
  // console.log('Selected: ', subredditsArray);
  return (
    <div>FeedPage</div>
  )
}

export default FeedPage;