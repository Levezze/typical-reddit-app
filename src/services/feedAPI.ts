import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostsResponseData } from "../types/api";

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getPostsFromSubreddits: builder.query<PostsResponseData, { subreddits: string[], sort: string, params?: Record<string, string>}>({
      query: ({subreddits, sort, params}) => {
        const queryString = new URLSearchParams(params || {}).toString();
        const subredditList = subreddits.join("+");
        return `/r/${subredditList}/${sort}.json?${queryString}&raw_json=1`;
      }
    }),
  }),
});

  
export const { useGetPostsFromSubredditsQuery } = feedApi;
