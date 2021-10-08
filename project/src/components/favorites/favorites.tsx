import { hotels } from '../../mock-data';
import FavoritesEmpty from './favorites-empty';
import FavoritesWithData from './favorites-with-data';

function Favorites(): JSX.Element {
  const favorites = [1];

  if (favorites.length) {
    return <FavoritesWithData hotels={hotels} />;
  } else {
    return <FavoritesEmpty />;
  }
}

export default Favorites;
