import { getGroupedHotels } from '../../service/hotels';
import FavoriteHotels from './hotel/favorite-hotels';
import { Hotel } from '../../types/hotel/hotel';

type FavoritesWithDataProps = {
  favorites: Hotel[];
};

function FavoritesWithData({ favorites }: FavoritesWithDataProps): JSX.Element {
  const groupedHotels = getGroupedHotels(favorites);
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
