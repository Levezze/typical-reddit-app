import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Search, Subreddit } from "../../../types/api";
import { RootState } from "../../../app/store/store";

const initialState: Search = {
  searchValue: '',
  subredditsResults: [],
  showPopular: true,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      if (state.searchValue.length > 0) {
        state.showPopular = false;
      } else {
        state.showPopular = true;
      }
    },
    setSubredditsResults(state, action: PayloadAction<Subreddit[]>) {
      state.subredditsResults = action.payload;
    }
  },
})

export const searchValue = (state: RootState): string => state.search.searchValue;
export const subredditsResults = (state: RootState): Subreddit[] => state.search.subredditsResults;
export const showPopular = (state: RootState): boolean => state.search.showPopular;
export const { changeSearchValue, setSubredditsResults } = searchSlice.actions;
export default searchSlice.reducer;
