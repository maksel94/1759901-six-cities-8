import { getFavoriteHotels } from '../../service/hotels';
import { HotelComponentProps } from '../../types/hotel/hotel-component-props';
import FavoritesEmpty from './favorites-empty';
import FavoritesWithData from './favorites-with-data';

function Favorites({ hotels }: HotelComponentProps): JSX.Element {
  const favorites = getFavoriteHotels(hotels);

  if (favorites.length) {
    return <FavoritesWithData favorites={favorites} />;
  } else {
    return <FavoritesEmpty />;
  }
}

export default Favorites;
