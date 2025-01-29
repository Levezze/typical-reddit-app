import { RootState } from '../../app/store/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateLoginURL } from '../../utils/loginURL';
import { logout } from './authSlice';
import Button from '../../app/components/Button/Button';

const AuthButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    window.location.href = generateLoginURL();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button
      className='auth-button'
      handleClick={isAuthenticated ? handleLogout : handleLogin}
      buttonName={isAuthenticated ? "Logout" : "Login To Reddit"}
    />
  );
};

export default AuthButton;