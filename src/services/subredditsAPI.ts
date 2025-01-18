import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Subreddit {
  name: string;
  subscribers: number;
  description: string;
  icon_img: string;
  id: string;
};

export const subredditsApi = createApi({
  reducerPath: 'subredditsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getPopularSubreddits: builder.query<Subreddit[], void>({
      query: () => 'subreddits/popular',
    }),
    searchSubreddits: builder.query<Subreddit[], string>({
      query: (query) => 
        `subreddits/search.json?q=${encodeURIComponent(query)}&limit=10&sort=relevance.json`
    }),
  }),
});

  
export const { useGetPopularSubredditsQuery, useSearchSubredditsQuery } = subredditsApi;