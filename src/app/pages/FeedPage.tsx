import React from 'react';
import Feed from '../../features/feed/Feed';
import { Subreddit } from '../../types/api';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useGetPostsFromSubredditsQuery } from '../../services/feedAPI';
import { sortValue } from '../../features/feed/feedSlice';
import Refresh from '../../features/feed/Refresh';
import '../../styles/FeedPage.scss';
import OptionsMenu from '../../features/feed/sort/OptionsMenu';



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
        <h1>Your Feed</h1>
        <div className='feed-control'>
          <OptionsMenu />
          <Refresh refetch={refetch} />
        </div>
      </div>
      <Feed data={data} error={error} isLoading={isLoading} />
    </>
  )
};

export default FeedPage;