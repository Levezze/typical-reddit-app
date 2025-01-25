import React, { useMemo, useCallback } from 'react';
import { Subreddit } from '../../../types/api'
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addSubreddit } from '../../../features/subreddits/subredditSlice';
import { RootState } from '../../store/store';
import { decodeHTML } from '../../../utils/helpers';

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
      <div className='sub-unit-container'>
        <div className='title-section'>
          <img className='sub-img' src={subreddit.icon_img} />
          <div className='title-text'>
            <h2>{subreddit.name}</h2>
            <h3>Subscribers: {subreddit.subscribers}</h3>
          </div>
        </div>
        <p>Description: {decodeHTML(subreddit.description)}</p>
        <Button 
          className='add-sub-button' 
          handleClick={(handleAddSub)} 
          buttonName='ADD TO FEED'
          disabled={subredditsFull || isInSelected}
        />
      </div>
    </li>
  );
};

export default React.memo(SubredditSearchUnit);
