import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

interface ProtectedRouteProps {
  redirectPath?: string; // Redirects unauthenticated users
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = '/' }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  };
  return <Outlet />
};

export default ProtectedRoute;