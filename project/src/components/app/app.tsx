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
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
