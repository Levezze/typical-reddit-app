import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tokenApi = createApi({
  reducerPath: 'tokenApi',
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