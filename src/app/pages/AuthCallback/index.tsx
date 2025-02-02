import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import axios from 'axios';

const AuthCallback: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const calledToken = useRef(false);

  useEffect(() => {
    if (calledToken.current) return;
    calledToken.current = true;

    const queryParams = new URLSearchParams(location.search);
    const state = queryParams.get('state');
    const code = queryParams.get('code');
    const storedState = localStorage.getItem('oauth_state')

    if (!code || state !== storedState) {
      console.log('Invalid state or missing code');
      navigate('/');
      return;
    };

    console.log('code', code);
    console.log('state', state);

    // Auth code for access token
    axios.get(
      `/api/oauth/token?code=${code}`)
      .then((response) => {
        const { access_token, expires_in, scope } = response.data;
        console.log('scope',scope);
        console.log('New token:', access_token);

        localStorage.setItem('token', access_token);
        localStorage.setItem('token_expiry', (Date.now() + expires_in * 1000).toString());
        localStorage.setItem('scope', scope);


        dispatch(login({ token: access_token }));

        console.log('Stored token:', localStorage.getItem('token'));

        if (!localStorage.getItem('first_login')) {
          localStorage.setItem('first_login', 'true');
          navigate('/subreddits');
        } else {
          navigate('/feed');
        }

      })
      .catch((error) => {
        console.error('Failed to fetch access token:', error);
        navigate('/');
      });
  }, [dispatch, location, navigate])

  return <p>Authorizing login...</p>
}

export default AuthCallback;