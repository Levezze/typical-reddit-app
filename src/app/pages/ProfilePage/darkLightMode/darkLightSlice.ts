import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDark: true,
};

const darkLightSlice = createSlice({
  name: 'darkLight',
  initialState,
  reducers: {
    switchDarkLight(state, action: PayloadAction<boolean>) {
      if (state.isDark !== action.payload) {
        state.isDark = action.payload;
      }
    }
  }
});

export const { switchDarkLight } = darkLightSlice.actions;
export default darkLightSlice.reducer;