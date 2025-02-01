import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { profileData } from "../../../types/api";

export const profileApi = createApi({
  reducerPath: 'profileApi',
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
    getProfileData: builder.query<profileData, void>({
      query: () => 'v1/me',
    }),
  }),
});

  
export const { useGetProfileDataQuery,  } = profileApi;