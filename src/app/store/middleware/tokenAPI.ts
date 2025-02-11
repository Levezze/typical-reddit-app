import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const tokenApi = createApi({
  reducerPath: 'tokenApi',
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
    revokeToken: builder.mutation<void, string>({
      query: ( token ) => ({
        url: 'v1/revoke_token',
        method: 'POST',
        body: new URLSearchParams({ token }),
      }),
    }),
  }),
});

  
export const { useRevokeTokenMutation } = tokenApi;