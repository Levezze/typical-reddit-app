import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed, Post } from "../../../types/api"
import { RootState } from "../store";


const initialState: Feed = {
  limit: 10,
  sort: 'hot',
  feedResults: [],
  singleColumn: false,
  feedColumns: 2,
  showMedia: true,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    changeFeedSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    changeFeedColumns(state, action: PayloadAction<boolean>) {
      state.feedColumns = action.payload ? 1 : 2;
      state.singleColumn = action.payload;
    },
    changeDisplayMedia(state, action: PayloadAction<boolean>) {
      state.showMedia = action.payload;
    },
    setFeedColumns(state, action: PayloadAction<number>) {
      state.feedColumns = action.payload;
      console.log('Feed columns:',state.feedColumns);
    },
    resetFeedColumns(state) {
      state.feedColumns = state.singleColumn ? 1 : 2;
      console.log('Feed columns:',state.feedColumns);
    },
  },
})

export const limitValue = (state: RootState): number => state.feed.limit;
export const sortValue = (state: RootState): string => state.feed.sort;
export const feedArray = (state: RootState): Post[] => state.feed.feedResults;
export const feedColumns = (state: RootState): number => state.feed.feedColumns;
export const feedMedia = (state: RootState): boolean => state.feed.showMedia;
export const { changeFeedSort, 
  changeFeedColumns, 
  changeDisplayMedia, 
  setFeedColumns, 
  resetFeedColumns 
} = feedSlice.actions;
export default feedSlice.reducer;