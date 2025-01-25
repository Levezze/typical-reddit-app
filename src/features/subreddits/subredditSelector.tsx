import { Subreddit } from '../../types/api'
import { useSelector } from 'react-redux'
import { subredditsResults } from '../search/searchSlice'
import SubredditSearchUnit from '../../app/components/SubredditSearchUnit/SubredditSearchUnit';
import BottomGradient from '../../app/components/BottomGradient/BottomGradient';


const SubredditSelector = () => {
  const subredditCatalog: Subreddit[] = useSelector(subredditsResults);

  return (
      <div className='subreddit-selector'>
        {Array.isArray(subredditCatalog) ? 
          (
            <ul>
              {subredditCatalog.map(subreddit => 
                <SubredditSearchUnit key={subreddit.id} subreddit={subreddit} /> 
              )}
            </ul>
          ) : <p>Unexpected data format!</p>
        }
        <BottomGradient />
      </div>
  );
}

export default SubredditSelector