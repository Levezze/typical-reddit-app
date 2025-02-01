import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profileData } from "../../../types/api";

const initialState: profileData = {
  name: '',
  icon_img: '',
  total_karma: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<profileData>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
