import { RootState } from '../../store/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateLoginURL } from '../../../utils/loginURL';
import { logout } from '../../store/slices/authSlice';
import Button from '../Button/Button';
import { useRevokeTokenMutation } from '../../store/middleware/tokenAPI';


const AuthButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);

  const [revokeToken] = useRevokeTokenMutation();

  const handleLogin = () => {
    window.location.href = generateLoginURL();
  };

  const handleLogout = async () => {
    if (token) {
      try {
        console.log('Revoking token...');
        await revokeToken(token).unwrap();
        console.log('✅ Token revoked successfully');
        dispatch(logout());
      } catch (error) {
        console.error('❌ Failed to revoke token:', error)
      }
    }
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