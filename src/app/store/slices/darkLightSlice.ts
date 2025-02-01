import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: true,
};

const darkLightSlice = createSlice({
  name: 'darkLight',
  initialState,
  reducers: {
    switchDarkLight(state) {
        state.isDark = !state.isDark;
    }
  }
});

export const { switchDarkLight } = darkLightSlice.actions;
export default darkLightSlice.reducer;