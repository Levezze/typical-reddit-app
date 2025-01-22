import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import SubredditSelectedUnit from '../../app/components/SubredditSelectedUnit/SubredditSelectedUnit';

const SubredditSelectedList = () => {
  const subredditsArray = useSelector((state: RootState) => state.subreddits.selected);

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
          <div className="subreddit-container"></div>
        </li>
      )),
  ];

  return (
    <div className='subreddit-selector'>
      <h3>Selected</h3>
      <ul>
        {subredditsDisplay}
      </ul>
    </div>
  );
};

export default SubredditSelectedList;