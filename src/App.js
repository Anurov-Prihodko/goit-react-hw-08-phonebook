import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner/Spinner';
import Container from './components/Container';
import { authOperations, authSelectors } from './redux/auth';

const PhonebookViews = lazy(() =>
  import('./views/PhonebookViews' /* webpackChunkName: "phonebook_page" */),
);
const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home_page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register_page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login_page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getFetching);

  console.log(isFetching);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<Spinner />}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute
              exact
              path="/register"
              restricted
              redirectTo="/contacts"
            >
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <PhonebookViews />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}
