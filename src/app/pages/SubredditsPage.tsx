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
            Array.isArray(data) ? 
            (
              <ul>
                {data.map(subreddit => 
                  <li key={subreddit.id}>
                    <img src={subreddit.icon_img} />
                    <p>
                      {subreddit.name}: {subreddit.subscribers} subscribers. 
                    </p>
                    <p>
                      {'Description: ' + subreddit.description}
                    </p>
                  </li>)}
              </ul>
            ) : <p>Unexpected data format!</p>
          }
        </h3>
      </div>
    </>
  )
}

export default SubredditsPage