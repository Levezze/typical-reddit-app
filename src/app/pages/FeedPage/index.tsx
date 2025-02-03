import React from 'react';
import Feed from './feed/Feed';
import { Subreddit } from '../../../types/api';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useGetPostsFromSubredditsQuery } from '../../store/middleware/feedAPI';
import { sortValue } from '../../store/slices/feedSlice'
import Refresh from './feed/Refresh';
import '../../../styles/FeedPage.scss'
import ControlsDropdown from './feed/controls/ControlsDropdown';



const FeedPage: React.FC = () => {
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
        <div className='feed-control'>
          <ControlsDropdown />
          <Refresh refetch={refetch} />
        </div>
      </div>
      <Feed data={data} error={error} isLoading={isLoading} />
    </>
  )
};

export default FeedPage;