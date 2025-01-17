import React from 'react';
import { Routes, Route } from 'react-router';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';

const AppRoutes = () => {
  const isAuthenticated = false; // Will be replaced with authentication logic

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/contact' element={<ContactPage />} />

      {/* Feed + Profile pages protected by authorization */}
      <Route 
        path='/feed'
        element={
          
        }
      />
    </Routes>
  )
}