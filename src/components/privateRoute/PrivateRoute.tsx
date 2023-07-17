import { useAppSelector } from "@/redux/hook";
import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();
  const { token } = useAppSelector((state) => state.user);
  return token ? (
    <>{element}</>
  ) : (
    <Navigate to="/signin" state={{ from: location.pathname }} replace />
  );
};

export default PrivateRoute;
