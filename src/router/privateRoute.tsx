import * as React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface IProps {
  //   path: string;
  //   component: React.ComponentType<any>;
}

export default function PrivateRoute({ Component }: any) {
  const { authState } = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/";
  return authState.isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/login" state={{ from }} replace />
  );
}
