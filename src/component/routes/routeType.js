import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";

function ComponentWrapper({ children }) {
  return children;
}

export function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Navigate
          to={{ pathname: "/", state: { from: props.location } }}
        />
      )}
    />
  );
}

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <ComponentWrapper>
          <Component {...props} />
        </ComponentWrapper>
      )}
    />
  );
}

export function DashboardRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <ComponentWrapper>
              <Component {...props} />
            </ComponentWrapper>
          </>
        );
      }}
    />
  );
}
