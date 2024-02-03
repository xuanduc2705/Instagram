import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, token, ...rest }) => {
  return (
    <Route
      {...rest}
      element={token ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;