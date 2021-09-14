import { Redirect, Switch } from 'react-router';

import Contacts from '../pages/contactsPage/ContactsPage';
import HomePage from '../pages/homePage/HomePage';
import LoginPage from '../pages/lognPage/LoginPage';
import RegisterPage from '../pages/registerPage/RegisterPage';
import { PrivateRoute, PublicRoute } from '../routes/routes';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <PublicRoute path="/" exact>
          <HomePage />
        </PublicRoute>
        <PrivateRoute path="/contacts">
          <Contacts />
        </PrivateRoute>
        <PublicRoute path="/register" restricted exact>
          <RegisterPage />
        </PublicRoute>
        <PublicRoute path="/login" restricted exact>
          <LoginPage />
        </PublicRoute>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
