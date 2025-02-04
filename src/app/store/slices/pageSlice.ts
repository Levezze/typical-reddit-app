import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageData } from "../../../types/api";

const initialState: pageData = {
  pageName: '',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.pageName = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
