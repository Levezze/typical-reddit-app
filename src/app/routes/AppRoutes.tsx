import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import App from '../App';
import LandingPage from '../pages';
import ContactPage from '../pages/ContactPage';
import AuthCallback from '../pages/AuthCallback';
import ProtectedRoute from './ProtectedRoute';
import SubredditsPage from '../pages/SubredditsPage';
import FeedPage from '../pages/FeedPage';
import ProfilePage from '../pages/ProfilePage';
import restoreAuth from '../../utils/restoreAuth';

const AppRoutes: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    restoreAuth(dispatch)
  },[dispatch]);

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const isFirstLogin = useSelector((state: RootState) => state.subreddits.firstLogin);

  return (
    <Routes>
      <Route path='/' element={<App />}>
        {/* Public Routes */}
        <Route index element={
          isAuthenticated ? (isFirstLogin ? <SubredditsPage/> : <FeedPage />) : <LandingPage />} />
        <Route path='/callback' element={<AuthCallback />} />
        <Route path='/contact' element={<ContactPage />} />

        {/* Protected Pages */}
        <Route element={<ProtectedRoute redirectPath='/' />}>
          <Route path='/subreddits' element={<SubredditsPage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/account' element={<ProfilePage />} />
        </Route>

        {/* Fallback Route */}
        <Route path='*' element={<LandingPage />} />
      </Route>
    </Routes>
  )
};

export default AppRoutes;