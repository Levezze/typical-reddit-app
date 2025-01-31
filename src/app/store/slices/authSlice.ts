import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
   token: null,
   isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('token_expiry');
      localStorage.removeItem('first_login');
      localStorage.removeItem('selected_subreddits');
    },
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;