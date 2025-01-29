import { login } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store/store";

const restoreAuth = (dispatch: AppDispatch) => {
  const token = localStorage.getItem('token');
  const expiry = localStorage.getItem('token_expiry');

  if (token && expiry && Date.now() < parseInt(expiry, 10)) {
    dispatch(login({ token }));
  } else {
    // Token expired
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiry');
  }
};

export default restoreAuth;