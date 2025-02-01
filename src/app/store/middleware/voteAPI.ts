import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VotePayload } from "../../../types/api";


export const voteApi = createApi({
  reducerPath: 'voteApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:4000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    vote: builder.mutation<void, VotePayload>({
      query: ({ ID, DIR }) => ({
        url: 'vote',
        method: 'POST',
        body: { ID, DIR },
      }),
    }),
  }),
});

  
export const { useVoteMutation } = voteApi;