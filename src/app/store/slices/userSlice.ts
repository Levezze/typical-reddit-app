import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubredditsState } from "../../../types/store";
import { Subreddit } from "../../../types/api";

const initialState: SubredditsState = {
  selected: [],
  subredditsFull: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addSubreddit(state, action: PayloadAction<Subreddit>) {
      if (state.selected.length < 5) {
        state.selected.push(action.payload);
      }
      state.subredditsFull = state.selected.length === 5;
    },
    removeSubreddit(state, action: PayloadAction<Subreddit>) {
      state.selected = state.selected.filter(sub => sub.id !== action.payload.id); // Change this to splice for n(1) best case
      state.subredditsFull = false;
    },
  },
});

export const { addSubreddit, removeSubreddit } = userSlice.actions;
export default userSlice.reducer;
