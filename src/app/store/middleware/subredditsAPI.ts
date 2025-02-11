import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseData } from "../../../types/api";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const subredditsApi = createApi({
  reducerPath: 'subredditsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getPopularSubreddits: builder.query<ResponseData, void>({
      query: () => 'subreddits/popular',
    }),
    searchSubreddits: builder.query<ResponseData, string>({
      query: (query) => 
        `subreddits/search.json?q=${encodeURIComponent(query)}&raw_json=1&limit=10&sort=relevance.json`
    }),
  }),
});

  
export const { useGetPopularSubredditsQuery, useSearchSubredditsQuery } = subredditsApi;