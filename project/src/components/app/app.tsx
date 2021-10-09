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
  const favoritesRender = () => <Favorites hotels={hotels} />;

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
        <Route exact path={`${AppRoute.Room}:id`}>
          <Room hotels={hotels} nearPlaces={hotels} reviews={reviews} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={favoritesRender}
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
