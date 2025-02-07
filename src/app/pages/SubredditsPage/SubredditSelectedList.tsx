import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import SubredditSelectedUnit from '../../components/SubredditSelectedUnit/SubredditSelectedUnit';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';
import { Subreddit } from '../../../types/api';

const SubredditSelectedList = () => {
  const subredditsArray = useSelector((state: RootState) => state.subreddits.selected);
  const pageViewMode = useSelector((state: RootState) => state.view.viewSize);
  const navigate = useNavigate();

  const subredditsDisplay = [
    ...subredditsArray.map((subreddit:Subreddit) => (
      <li key={subreddit.id}>
        <SubredditSelectedUnit subreddit={subreddit} />
      </li>
    )),
    ...Array(5 - subredditsArray.length)
      .fill(null)
      .map((_, index) => (
        <li key={`empty-${index}`}>
          <div className="subreddit-empty-container"></div>
        </li>
      )),
  ];

  const handleNavigateToFeed = () => navigate('/feed');

  return (
    <>
      <div className='subreddit-selected'>
        <div className='selected-subs'>
          <ul>
            {subredditsDisplay}
          </ul>
        </div>
        {pageViewMode === 2 ? null : <Button 
          className='continue-btn'
          buttonName='CONTINUE TO FEED' 
          handleClick={handleNavigateToFeed}
          disabled={subredditsArray.length <= 0}
          />}
      </div>
      {pageViewMode === 2 ? <Button 
        className='continue-btn'
        buttonName='CONTINUE TO FEED' 
        handleClick={handleNavigateToFeed}
        disabled={subredditsArray.length <= 0}
      /> : null}
    </>
  );
};

export default SubredditSelectedList;
