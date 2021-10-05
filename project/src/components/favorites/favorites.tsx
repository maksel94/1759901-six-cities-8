import FavoritesEmpty from './favorites-empty';
import FavoritesWithData from './favorites-with-data';

function Favorites(): JSX.Element {
  const favorites = [];

  if (favorites.length) {
    return <FavoritesWithData />;
  } else {
    return <FavoritesEmpty />;
  }
}

export default Favorites;
