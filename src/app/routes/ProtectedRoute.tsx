import React from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
  redirectPath?: string; // Redirects unauthenticated users
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
  redirectPath = '/login',
}) => {
  if {!isAuthenticated} {
    return <Navigate to={RedirectPath} replace />
  }

  return <>{children}</>
}