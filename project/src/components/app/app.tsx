import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PrivateRoute from '../private-route/private-route';
import Favorites from '../favorites/favorites';
import Header from '../header/header';
import Main from '../main/main';
import NotFoundPage from '../not-fount-page/not-fount-page';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import { AppRoute, AuthorizationStatus } from '../../constants';

const isAuthorized = true;

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header isAuthorized={isAuthorized} />
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Room}>
          <Room />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route>
        {/* <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        /> */}
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
