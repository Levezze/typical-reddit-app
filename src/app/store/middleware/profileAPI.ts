import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { profileData } from "../../../types/api";
import { RootState } from "../store";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const profileApi = createApi({
  reducerPath: 'profileApi',
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
    getProfileData: builder.query<profileData, void>({
      query: () => 'v1/me',
    }),
  }),
});

  
export const { useGetProfileDataQuery,  } = profileApi;