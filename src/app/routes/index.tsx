import React from 'react';
import { Routes, Route } from 'react-router';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const AppRoutes: React.FC = () => {
  const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/contact' element={<ContactPage />} />

      {/* Pages protected by authorization */}
      <Route element={<ProtectedRoute redirectPath='/' />}>

      </ProtectedRoute>
      <Route 
        path='/feed'
        element={
          
        }
      />
    </Routes>
  )
}