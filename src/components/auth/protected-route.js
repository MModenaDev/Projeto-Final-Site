import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (  
    <Route
      {...rest}
      render={props => {
        if (user) {
          return <Component {...props} loggedInUser={user} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/", prevPath: props.location.pathname }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;