import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../hooks";

export const PrivateRoute = (props) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) return <h3>Loading</h3>;

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
