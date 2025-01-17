import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubredditsState {
  selected: string[];
};

const initialState: SubredditsState = {
  selected: [],
};

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    addSubreddit(state, action: PayloadAction<string>) {
      if (state.selected.length < 5 && !state.selected.includes(action.payload)) {
        state.selected.push(action.payload);
      }
    },
    removeSubreddit(state, action: PayloadAction<string>) {
      state.selected.filter(sub => sub !== action.payload);
    },
  },
});

export const { addSubreddit, removeSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;