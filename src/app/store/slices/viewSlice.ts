import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { viewData } from "../../../types/api";

const initialState: viewData = {
  viewSize: null,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView(state, action: PayloadAction<number>) {
      state.viewSize = action.payload;
      switch (state.viewSize) {
        case (0): {
          console.log('View: Full Size')
          break;
        }
        case (1): {
          console.log('View: Tablet')
          break;
        }
        case (2): {
          console.log('View: Mobile')
          break;
        }
        default: {
          break;
        };
      };
    },
  },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;
