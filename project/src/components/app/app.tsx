import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../constants';
import Favorites from '../favorites/favorites';
import Header from '../header/header';
import Main from '../main/main';
import NotFoundPage from '../not-fount-page/not-fount-page';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';

const isAuthorized = true;

function App(): JSX.Element {
  const isMainPage: boolean = window.location.pathname === AppRoute.Main;
  const isSignInPage: boolean = window.location.pathname === AppRoute.SignIn;

  return (
    <BrowserRouter>
      {!isSignInPage && <Header isMainPage={isMainPage} isAuthorized={isAuthorized} />}
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
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
