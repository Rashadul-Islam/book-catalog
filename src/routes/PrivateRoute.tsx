import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { token } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (!token) {
    return <Navigate to="/signin" state={{ from: pathname }} />;
  }

  return <>{children}</>;
}
