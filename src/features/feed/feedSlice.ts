import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed, Post } from "../../types/api";
import { RootState } from "../../app/store/store";


const initialState: Feed = {
  limit: 10,
  sort: 'hot',
  feedResults: [],
  feedColumns: 1,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    changeFeedSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    changeFeedColumns(state, action: PayloadAction<boolean>) {
      if (!action.payload) {state.feedColumns = 1}
      else {state.feedColumns = 2};
    },
  },
})

export const limitValue = (state: RootState): number => state.feed.limit;
export const sortValue = (state: RootState): string => state.feed.sort;
export const feedArray = (state: RootState): Post[] => state.feed.feedResults;
export const { changeFeedSort } = feedSlice.actions;
export default feedSlice.reducer;