import React, { useMemo, useCallback } from 'react';
import { Subreddit } from '../../../types/api'
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addSubreddit } from '../../store/slices/subredditSlice';
import { RootState } from '../../store/store';
import { decodeHTML } from '../../../utils/helpers';
import { subSubImg } from '../../../utils/helpers';

type Props = {
  subreddit: Subreddit;
}

const SubredditSearchUnit = ({ subreddit }: Props) => {
  const dispatch = useDispatch();
  const handleAddSub = useCallback(() => {
    dispatch(addSubreddit(subreddit));
  },[dispatch, subreddit]);

  const subredditsFull = useSelector((state: RootState) => state.subreddits.subredditsFull);
  const subImg = subSubImg(subreddit.icon_img);
  const subredditsList: Subreddit[] = useSelector((state: RootState) => state.subreddits.selected);
  const isInSelected = useMemo(
    () => subredditsList.some((each)=> each.id === subreddit.id
  ),[subredditsList, subreddit.id]);

  return (
    <li>
      <div className='sub-unit-container'>
        <div className='title-section'>
          <img className='sub-img' src={subImg} />
          <div className='title-text'>
            <h2>{subreddit.name}</h2>
            <h3>Subscribers: {subreddit.subscribers}</h3>
          </div>
        </div>
        <p>Description: {decodeHTML(subreddit.description)}</p>
        <Button 
          className='add-sub-button' 
          handleClick={(handleAddSub)} 
          buttonName={isInSelected ? 'ADDED TO FEED' : 'ADD TO FEED'}
          disabled={subredditsFull || isInSelected}
        />
      </div>
    </li>
  );
};

export default React.memo(SubredditSearchUnit);
