import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLogedin = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLogedin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
