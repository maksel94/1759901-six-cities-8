import { getFavoriteHotels, getGroupedHotels } from '../../service/hotels';
import { Hotel } from '../../types/hotel';
import FavoriteHotels from './hotel/favorite-hotels';

type FavoritesWithDataProps = {
  hotels: Hotel[];
};

function FavoritesWithData({ hotels }: FavoritesWithDataProps): JSX.Element {
  const favoriteHotels = getFavoriteHotels(hotels);
  const groupedHotels = getGroupedHotels(favoriteHotels);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteHotels groupedHotels={groupedHotels} />
        </section>
      </div>
    </main>
  );
}

export default FavoritesWithData;
