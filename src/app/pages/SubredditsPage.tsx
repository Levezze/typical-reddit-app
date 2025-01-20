import React, { useState, useEffect } from 'react'
import { useGetPopularSubredditsQuery } from '../../services/subredditsAPI'
import { responseData } from '../../utils/responseData';
import { ResponseData } from '../../types/api';
import { Subreddit } from '../../types/api';

const SubredditsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const { data, error, isLoading } = useGetPopularSubredditsQuery();

  console.log('Data:', data)
  console.log('Error:', error)

  const parsedData:Subreddit[] = responseData(data as ResponseData);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  useEffect(() => {
    console.log('Search term: ', search)
  }, [search]);

  return (
    <>
      <form>
        <label htmlFor="searchInput" />
        <input onChange={handleSearch} id='searchInput' type='text' placeholder='Search subreddits...' required />

      </form>
      <h1>SubredditsPage</h1>
      <div>
        {
          error ? <p>Error loading subreddits!</p> :
          isLoading ? <p>Loading...</p> :
          Array.isArray(parsedData) ? 
          (
            <ul>
              {parsedData.map(subreddit => 
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
      </div>
    </>
  )
}

export default SubredditsPage