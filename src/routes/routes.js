import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { authTokenSelector } from '../redux/auth/auth-selectors';

export const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(authTokenSelector);
  return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>;
};

export const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(authTokenSelector);
  const shouldRedirect = isLoggedIn && restricted;
  return <Route {...routeProps}>{shouldRedirect ? <Redirect to="/contacts" /> : children}</Route>;
};
