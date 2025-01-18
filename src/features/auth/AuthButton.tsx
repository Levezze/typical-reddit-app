import { RootState } from '../../app/store/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateLoginURL } from '../../utils/loginURL';
import { logout } from './authSlice';

const AuthButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const loginURL = generateLoginURL();
  console.log(loginURL)

  const handleLogin = () => {
    window.location.href = loginURL;
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button onClick={isAuthenticated ? handleLogout : handleLogin}>
      {isAuthenticated ? "Logout" : "Login To Reddit"}
    </button>
  );
};

export default AuthButton;