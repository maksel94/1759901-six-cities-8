import { Redirect, useParams } from 'react-router';
import { Comment } from '../../types/comment';
import { Hotel } from '../../types/hotel';
import NearPlaces from './near-places';
import RoomDetails from './room-details';
import RoomGallery from './room-gallery';
import { AppRoute } from '../../constants';
import { RoomRouterProps } from '../../types/room-router-props';

type RoomProps = {
  hotels: Hotel[];
  nearPlaces: Hotel[];
  reviews: Comment[];
};

function Room({ hotels, nearPlaces, reviews }: RoomProps): JSX.Element {
  const { id } = useParams<RoomRouterProps>();
  let hotel: Hotel | undefined;

  if (window.location.pathname.includes(AppRoute.Room)) {
    hotel = hotels.find((x) => x.id === id);
  }

  if (!hotel) {
    return <Redirect to="not-found" />;
  }
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
