import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import App from '../App';
import LandingPage from '../pages/LandingPage';
import ContactPage from '../pages/ContactPage';
import AuthCallback from '../pages/AuthCallback';
import ProtectedRoute from './ProtectedRoute';
import SubredditsPage from '../pages/SubredditsPage';
import FeedPage from '../pages/FeedPage';
import ProfilePage from '../pages/ProfilePage';
import restoreAuth from '../../utils/restoreAuth';
// import { selectedSubreddits } from '../../features/subreddits/subredditSlice';

const AppRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  // const subredditsArray = useSelector(selectedSubreddits);
  // const subredditsArrayActive = subredditsArray.length > 0;

  useEffect(() => {
    restoreAuth(dispatch)
  },[dispatch]);

  return (
    <Routes>
      <Route path='/' element={<App />}>
        {/* Public Routes */}
        <Route index element={
          isAuthenticated ? <FeedPage /> : <LandingPage />} />
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