import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PrivateRoute from '../private-route/private-route';
import Favorites from '../favorites/favorites';
import Header from '../header/header';
import Main from '../main/main';
import NotFoundPage from '../not-fount-page/not-fount-page';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { Comment } from '../../types/comment';
import { HotelComponentProps } from '../../types/hotel-component-props';

const isAuthorized = true;

type AppProps = HotelComponentProps & {
  reviews: Comment[];
};

function App({ hotels, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Header isAuthorized={isAuthorized} />
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main hotels={hotels} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Room}>
          <Room hotel={hotels[0]} nearPlaces={hotels} reviews={reviews} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites hotels={hotels} />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
