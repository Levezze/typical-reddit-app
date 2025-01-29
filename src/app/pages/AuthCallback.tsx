import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import axios from 'axios';

const AuthCallback: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const state = queryParams.get('state');
    const code = queryParams.get('code');
    const storedState = localStorage.getItem('oauth_state')

    if (!code || state !== storedState) {
      console.log('Invalid state or missing code');
      navigate('/');
      return;
    };

    // Auth code for access token
    axios.get(
      `http://localhost:4000/api/oauth/token?code=${code}`)
      .then((response) => {
        const { access_token, expires_in} = response.data;

        localStorage.setItem('token', access_token);
        localStorage.setItem('token_expiry', (Date.now() + expires_in * 1000).toString());

        dispatch(login({ token: access_token }));
        navigate('/subreddits');
      })
      .catch((error) => {
        console.error('Failed to fetch access token:', error);
        navigate('/');
      });
  }, [dispatch, location, navigate])

  return <p>Authorizing login...</p>
}

export default AuthCallback;