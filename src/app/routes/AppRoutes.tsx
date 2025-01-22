import React from 'react';
import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import App from '../App';
import LandingPage from '../pages/LandingPage';
import ContactPage from '../pages/ContactPage';
import AuthCallback from '../pages/AuthCallback';
import ProtectedRoute from './ProtectedRoute';
import SubredditsPage from '../pages/SubredditsPage';
import FeedPage from '../pages/FeedPage';
import ProfilePage from '../pages/ProfilePage';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      <Route path='/' element={<App />}>
        {/* Public Routes */}
        <Route index element={isAuthenticated ? <SubredditsPage /> : <LandingPage />} />
        <Route path='/callback' element={<AuthCallback />} />
        <Route path='/contact' element={<ContactPage />} />

        {/* Protected Pages */}
        <Route element={<ProtectedRoute redirectPath='/' />}>
          <Route path='/subreddits' element={<SubredditsPage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>

        {/* Fallback Route */}
        <Route path='*' element={<LandingPage />} />
      </Route>
    </Routes>
  )
};

export default AppRoutes;