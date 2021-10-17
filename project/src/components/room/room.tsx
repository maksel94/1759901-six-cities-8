import { Redirect, useParams } from 'react-router';
import { Comment } from '../../types/comment';
import { Hotel } from '../../types/hotel/hotel';
import RoomDetails from './room-details';
import RoomGallery from './room-gallery';
import { AppRoute } from '../../constants';
import { RoomRouterProps } from '../../types/room-router-props';
import PropertyMap from '../map/property-map';
import NearHotels from '../hotel/near-hotels';

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
        <PropertyMap cityLocation={hotel.city.location} points={hotels} selectedPoint={hotel} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <NearHotels hotels={nearPlaces} />
        </section>
      </div>
    </main>
  );
}

export default Room;
