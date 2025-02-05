import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themeSwitcher } from "../../../utils/helpers";

const initialState = {
  isDark: true,
};

const darkLightSlice = createSlice({
  name: 'darkLight',
  initialState,
  reducers: {
    switchDarkLight(state) {
      state.isDark = !state.isDark;
      console.log(state.isDark);
      localStorage.setItem('isDark', state.isDark.toString());      
      themeSwitcher(state.isDark);
    },
    setDarkLight(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload;
      themeSwitcher(state.isDark);
    },
  }
});

export const { switchDarkLight, setDarkLight } = darkLightSlice.actions;
export default darkLightSlice.reducer;