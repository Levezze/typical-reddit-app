import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'

const AuthCallback: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const state = queryParams.get('state');
    const code = queryParams.get('code');

    if (state && code) {
      console.log('State:', state, 'Code:', code);
      dispatch(login());

      navigate('/subreddits')
    }
  }, [dispatch, location.search, navigate])

  return <p>Authorizing login...</p>
}

export default AuthCallback;