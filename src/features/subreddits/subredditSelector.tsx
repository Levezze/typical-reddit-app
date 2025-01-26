import { Subreddit } from '../../types/api'
import { useSelector } from 'react-redux'
import { subredditsResults } from '../search/searchSlice'
import SubredditSearchUnit from '../../app/components/SubredditSearchUnit/SubredditSearchUnit';
import BottomGradient from '../../app/components/BottomGradient/BottomGradient';


const SubredditSelector = () => {
  const subredditCatalog: Subreddit[] = useSelector(subredditsResults);

  return (
      <>
        {Array.isArray(subredditCatalog) ? 
          (
            <div className='subreddit-selector'>
              <ul>
                {subredditCatalog.map(subreddit => 
                  <SubredditSearchUnit key={subreddit.id} subreddit={subreddit} /> 
                )}
              </ul>
              <BottomGradient />
            </div>
          ) : <p>Unexpected data format!</p>
        }
        
      </>
  );
}

export default SubredditSelector