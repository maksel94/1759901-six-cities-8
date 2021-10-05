import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../constants';
import Favorites from '../favorites/favorites';
import Main from '../main/main';
import NotFoundPage from '../not-fount-page/not-fount-page';
import Room from '../room/room';
// import Header from '../header/header';
// import Room from '../room/room';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}></Route>
        <Route exact path={AppRoute.SignIn}>
          <Main />
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
