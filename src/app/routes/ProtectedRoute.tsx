import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { RootState } from "../store/store";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
  redirectPath?: string; // Redirects unauthenticated users
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = '/login' }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  };
  return <Outlet />
};

export default ProtectedRoute;