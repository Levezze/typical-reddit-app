import { Subreddit } from '../../types/api'
import { useSelector } from 'react-redux'
import { subredditsResults } from '../search/searchSlice'
import { SubredditUnit } from '../../app/components/SubredditUnit/SubredditUnit';


const SubredditSelector = () => {
  const subredditCatalog: Subreddit[] = useSelector(subredditsResults);

  return (
      <div>
        {Array.isArray(subredditCatalog) ? 
          (
            <ul>
              {subredditCatalog.map(subreddit => 
                <SubredditUnit key={subreddit.id} subreddit={subreddit} /> 
              )}
            </ul>
          ) : <p>Unexpected data format!</p>
        }
      </div>
  );
}

export default SubredditSelector