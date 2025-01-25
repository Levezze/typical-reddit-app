import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import SubredditSelectedUnit from '../../app/components/SubredditSelectedUnit/SubredditSelectedUnit';
import Button from '../../app/components/Button/Button';
import { useNavigate } from 'react-router';

const SubredditSelectedList = () => {
  const subredditsArray = useSelector((state: RootState) => state.subreddits.selected);
  const navigate = useNavigate();

  const subredditsDisplay = [
    ...subredditsArray.map((subreddit) => (
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
    <div className='subreddit-selected'>
      <div className='selected-subs'>
        <ul>
          {subredditsDisplay}
        </ul>
      </div>
      <Button 
        className='continue-btn'
        buttonName='CONTINUE TO FEED' 
        handleClick={handleNavigateToFeed}
        disabled={subredditsArray.length <= 0}
      />
    </div>
  );
};

export default SubredditSelectedList;
