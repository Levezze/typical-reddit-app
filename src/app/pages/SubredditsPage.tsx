import React from 'react'
import { useGetPopularSubredditsQuery } from '../../services/subredditsAPI'

const SubredditsPage: React.FC = () => {
  const { data, error, isLoading } = useGetPopularSubredditsQuery();

  console.log('Data:', data)
  console.log('Error:', error)

  return (
    <>
      <h1>SubredditsPage</h1>
      <div>
        <h3>Results
          {
            error ? <p>Error loading subreddits!</p> :
            isLoading ? <p>Loading...</p> :
            data ? 
            (
              <ul>
                {data.map(subreddit => 
                  <li key={subreddit.name}>
                    {subreddit.name}: {subreddit.subscribers} subscribers.
                  </li>)}
              </ul>
            ) : <p>Couldn't find subreddits...</p>
          }
        </h3>
      </div>
    </>
  )
}

export default SubredditsPage