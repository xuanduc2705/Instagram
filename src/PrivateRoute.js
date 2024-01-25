import { Route, Navigate } from 'react-router-dom';
import { getTokenFromSessionStorage } from './component/Util/storageUtil';

function PrivateRoute({ element: Element, ...rest }) {
  const token = getTokenFromSessionStorage();

  return token ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoute;