import React, { useMemo, useCallback } from 'react';
import { Subreddit } from '../../../types/api'
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addSubreddit } from '../../../features/subreddits/subredditSlice';
import { RootState } from '../../store/store';

type Props = {
  subreddit: Subreddit;
}

const SubredditSearchUnit = ({ subreddit }: Props) => {
  const dispatch = useDispatch();
  const handleAddSub = useCallback(() => {
    dispatch(addSubreddit(subreddit));
  },[dispatch, subreddit]);

  const subredditsFull = useSelector((state: RootState) => state.subreddits.subredditsFull);

  const subredditsList: Subreddit[] = useSelector((state: RootState) => state.subreddits.selected);
  const isInSelected = useMemo(
    () => subredditsList.some((each)=> each.id === subreddit.id
  ),[subredditsList, subreddit.id]);

  return (
    <li>
      <img className='sub-img' src={subreddit.icon_img} />
      <h3>{subreddit.name}</h3>
      <p>Subscribers: {subreddit.subscribers}</p>
      <p>Description: {subreddit.description}</p>
      <Button 
        className='add-sub-button' 
        handleClick={(handleAddSub)} 
        buttonName='ADD TO SELECTED'
        disabled={subredditsFull || isInSelected}
      />
    </li>
  );
};

export default React.memo(SubredditSearchUnit);
