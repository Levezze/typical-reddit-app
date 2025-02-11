import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VotePayload } from "../../../types/api";
import { RootState } from "../store";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const voteApi = createApi({
  reducerPath: 'voteApi',
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