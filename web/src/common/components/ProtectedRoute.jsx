import { Route, Redirect } from "react-router-dom";
import React, { useContext } from "react";
import { AuthenticationContext } from "../authentication/context";

const ProtectedRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useContext(AuthenticationContext);

  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoute;
