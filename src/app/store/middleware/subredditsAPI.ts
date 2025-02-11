import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseData } from "../../../types/api";
import { RootState } from "../store";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const subredditsApi = createApi({
  reducerPath: 'subredditsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
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