import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VotePayload } from "../../../types/api";


export const voteApi = createApi({
  reducerPath: 'voteApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://oauth.reddit.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set('Authorization', 'Bearer ${token}');
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    vote: builder.mutation<void, VotePayload>({
      query: ({ id, dir}) => ({
        url: 'api/vote',
        method: 'POST',
        body: { id, dir },
      }),
    }),
  }),
});

  
export const { useVoteMutation } = voteApi;