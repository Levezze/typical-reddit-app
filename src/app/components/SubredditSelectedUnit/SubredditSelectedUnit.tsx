import React, { useCallback } from 'react';
import { Subreddit } from '../../../types/api'
import { useDispatch } from 'react-redux';
import { removeSubreddit } from '../../../features/subreddits/subredditSlice';

type Props = {
  subreddit: Subreddit;
}

const SubredditSelectedUnit = ({ subreddit }: Props) => {
  const dispatch = useDispatch();
  const handleRemoveSub = useCallback(() => {
    dispatch(removeSubreddit(subreddit));
  },[dispatch, subreddit]);

  return (
      <button className='subreddit-container SubredditSelectedUnit' onClick={handleRemoveSub}>
        <img className='sub-img' src={subreddit.icon_img} />
        <p>{subreddit.name}</p>
      </button>
  );
};

export default React.memo(SubredditSelectedUnit);
