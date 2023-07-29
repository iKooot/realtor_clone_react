import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../hooks";
import { Spinner } from "./Spinner";

export const PrivateRoute = (props) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) return <Spinner />;

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
