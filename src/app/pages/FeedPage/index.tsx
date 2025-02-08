import React, { useEffect } from 'react';
import Feed from './feed/Feed';
import { Subreddit } from '../../../types/api';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsFromSubredditsQuery } from '../../store/middleware/feedAPI';
import { sortValue } from '../../store/slices/feedSlice'
import Refresh from './feed/controls/Refresh';
import '../../../styles/FeedPage.scss'
import ControlsDropdown from './feed/controls/ControlsDropdown';
import { setPage } from '../../store/slices/pageSlice';

const FeedPage: React.FC = () => {
  const pageView = useSelector((state: RootState) => state.view.viewSize);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setPage('feed'));
  },[dispatch]);
  const sort = useSelector(sortValue);
  const subredditsArray: Subreddit[] = useSelector(
    (state: RootState) => state.subreddits.selected
  );
  let subredditsNames: string[] = [];
  if (subredditsArray.length) {
    subredditsNames = subredditsArray.map(subreddit => subreddit.name);
  };
  const { data, error, isLoading, refetch } = useGetPostsFromSubredditsQuery(
    { subreddits: subredditsNames, sort }
  );

  return (
    <>
      <div className='feed-top'>
        <h1>Typical Feed</h1>
        <div className={`feed-control ${pageView === 2 ? 'mobile' : ''}`}>
          <ControlsDropdown />
          <Refresh refetch={refetch} />
        </div>
      </div>
      <Feed data={data} error={error} isLoading={isLoading} />
    </>
  )
};

export default FeedPage;