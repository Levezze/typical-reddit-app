import { login } from "../features/auth/authSlice";
import { setSubreddits } from "../features/subreddits/subredditSlice";
import { AppDispatch } from "../app/store/store";

const restoreAuth = (dispatch: AppDispatch) => {
  const token = localStorage.getItem('token');
  const expiry = localStorage.getItem('token_expiry');

  if (token && expiry && Date.now() < parseInt(expiry, 10)) {
    console.log('Date now:',Date.now());
    console.log('Expiry:',parseInt(expiry, 10));
    console.log('Expiry bool:',(Date.now() < parseInt(expiry, 10)));
    console.log('loggen in, token:',token);
    console.log('Time remaining:', parseInt(expiry, 10) - Date.now());
    dispatch(login({ token }));

    const storedSubreddits = localStorage.getItem('selected_subreddits');
    if (storedSubreddits) {
      dispatch(setSubreddits(JSON.parse(storedSubreddits)));
    }
  } else {
    // Token expired
    console.log('Token expired')
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiry');
    localStorage.removeItem('selected_subreddits');
  };
};

export default restoreAuth;