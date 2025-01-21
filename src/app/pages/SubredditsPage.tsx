import React, { useState, useEffect } from 'react'
import { useGetPopularSubredditsQuery, useSearchSubredditsQuery } from '../../services/subredditsAPI'
import { responseData } from '../../utils/responseData';
import { ResponseData, Subreddit } from '../../types/api';
import { Search } from '../../features/search/Search';
import { useSelector } from 'react-redux';
import { showPopular, searchValue, subredditsResults } from '../../features/search/searchSlice';

const SubredditsPage: React.FC = () => {
  const isShowPopular = useSelector(showPopular);
  const updatedSearchVal = useSelector(searchValue);

  const { data: popularData, error: popularError, isLoading: popularIsLoading } = useGetPopularSubredditsQuery();
  const { data: searchData, error: searcHError, isLoading: searchIsLoading } = useSearchSubredditsQuery(updatedSearchVal);

  const data = isShowPopular ? popularData : searchData;
  const error = isShowPopular ? popularError : searcHError;
  const isLoading = isShowPopular ? popularIsLoading : searchIsLoading;

  console.log('Data:', data)
  console.log('Error:', error)

  const parsedData:Subreddit[] = data ? responseData(data as ResponseData): [];

  return (
    <>
      <Search />
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

export default SubredditsPage;