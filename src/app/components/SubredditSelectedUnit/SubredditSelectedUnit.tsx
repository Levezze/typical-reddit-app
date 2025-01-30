import React, { useCallback } from 'react';
import { Subreddit } from '../../../types/api';
import { useDispatch } from 'react-redux';
import { removeSubreddit } from '../../store/slices/subredditSlice';
import { subSubImg } from '../../../utils/helpers';

type Props = {
  subreddit: Subreddit;
}

const SubredditSelectedUnit = ({ subreddit }: Props) => {
  const dispatch = useDispatch();
  const handleRemoveSub = useCallback(() => {
    dispatch(removeSubreddit(subreddit));
  },[dispatch, subreddit]);
  const subImg = subSubImg(subreddit.icon_img);

  return (
    <div className='subreddit-container' onClick={handleRemoveSub}>
      <img className='sub-img' src={subImg} />
      <p>{`r/${subreddit.name}`}</p>
    </div>
  );
};

export default React.memo(SubredditSelectedUnit);
