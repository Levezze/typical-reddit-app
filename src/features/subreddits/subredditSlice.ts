import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubredditsState } from "../../types/store";
import { Subreddit } from "../../types/api";
import { RootState } from "../../app/store/store";

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
        localStorage.setItem('selected_subreddits', JSON.stringify(state.selected));
      }
      state.subredditsFull = state.selected.length === 5;
    },
    setSubreddits(state, action: PayloadAction<Subreddit[]>) {
      state.selected = action.payload;
      state.subredditsFull = state.selected.length === 5;
    },
    removeSubreddit(state, action: PayloadAction<Subreddit>) {
      state.selected = state.selected.filter(sub => sub.id !== action.payload.id); 
      localStorage.setItem('selected_subreddits', JSON.stringify(state.selected));
      // Change this to splice for n(1) best case
      state.subredditsFull = false;
    },
  },
});

export const selectedSubreddits = (state:RootState) => state.subreddits.selected;
export const selectedSubredditsFull = (state:RootState) => state.subreddits.subredditsFull;
export const { addSubreddit, setSubreddits, removeSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
