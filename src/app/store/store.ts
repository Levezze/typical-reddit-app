import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../../features/auth/authSlice';
import subredditsReducer from '../../features/subreddits/subredditSlice';
import searchReducer from '../../features/search/searchSlice';
import darkLightReducer from '../../features/darkLightMode/darkLightSlice'
import feedReducer from '../../features/feed/feedSlice';
import { subredditsApi } from '../../services/subredditsAPI';
import { feedApi } from '../../services/feedAPI';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    subreddits: subredditsReducer,
    search: searchReducer,
    darkLight: darkLightReducer,
    feed: feedReducer,
    [subredditsApi.reducerPath]: subredditsApi.reducer,
    [feedApi.reducerPath]: feedApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subredditsApi.middleware, feedApi.middleware),
})

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
