import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubredditsState } from "../../types/store";
import { Subreddit } from "../../types/api";

const initialState: SubredditsState = {
  selected: [],
  subredditsFull: false,
};

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    addSubreddit(state, action: PayloadAction<Subreddit>) {
      if (state.selected.length < 5) {
        state.selected.push(action.payload);
      }
      state.subredditsFull = state.selected.length === 5;
    },
    removeSubreddit(state, action: PayloadAction<Subreddit>) {
      state.selected.filter(sub => sub.id !== action.payload.id);
      state.subredditsFull = state.selected.length === 5;
    },
  },
});

export const { addSubreddit, removeSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
