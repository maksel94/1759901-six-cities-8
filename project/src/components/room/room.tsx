import { Comment } from '../../types/comment';
import { Hotel } from '../../types/hotel';
import NearPlaces from './near-places';
import RoomDetails from './room-details';
import RoomGallery from './room-gallery';

type RoomProps = {
  hotel: Hotel;
  nearPlaces: Hotel[];
  reviews: Comment[];
};

function Room({ hotel, nearPlaces, reviews }: RoomProps): JSX.Element {
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <RoomGallery images={hotel.images} />
        </div>
        <div className="property__container container">
          <RoomDetails hotel={hotel} reviews={reviews} />
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <NearPlaces hotels={nearPlaces} />
      </div>
    </main>
  );
}

export default Room;
