import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './slices/authSlice';
import subredditsReducer from './slices/subredditSlice';
import searchReducer from './slices/searchSlice';
import darkLightReducer from './slices/darkLightSlice'
import feedReducer from './slices/feedSlice';
import profileReducer from './slices/profileSlice';
import { subredditsApi } from './middleware/subredditsAPI';
import { feedApi } from './middleware/feedAPI';
import { voteApi } from './middleware/voteAPI';
import { tokenApi } from './middleware/tokenAPI';
import { profileApi } from './middleware/profileAPI';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    subreddits: subredditsReducer,
    search: searchReducer,
    darkLight: darkLightReducer,
    feed: feedReducer,
    profile: profileReducer,
    [subredditsApi.reducerPath]: subredditsApi.reducer,
    [feedApi.reducerPath]: feedApi.reducer,
    [voteApi.reducerPath]: voteApi.reducer,
    [tokenApi.reducerPath]: tokenApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      subredditsApi.middleware, 
      feedApi.middleware, 
      voteApi.middleware,
      tokenApi.middleware,
      profileApi.middleware,
    ),
})

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
