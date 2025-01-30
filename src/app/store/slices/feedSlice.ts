import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed, Post } from "../../../types/api"
import { RootState } from "../store";


const initialState: Feed = {
  limit: 10,
  sort: 'hot',
  feedResults: [],
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
    },
    changeDisplayMedia(state, action: PayloadAction<boolean>) {
      state.showMedia = action.payload;
    },
  },
})

export const limitValue = (state: RootState): number => state.feed.limit;
export const sortValue = (state: RootState): string => state.feed.sort;
export const feedArray = (state: RootState): Post[] => state.feed.feedResults;
export const feedColumns = (state: RootState): number => state.feed.feedColumns;
export const feedMedia = (state: RootState): boolean => state.feed.showMedia;
export const { changeFeedSort, changeFeedColumns, changeDisplayMedia } = feedSlice.actions;
export default feedSlice.reducer;