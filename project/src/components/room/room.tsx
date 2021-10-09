import { hotels } from '../../mocks/mock-hotel';
import NearPlaces from './near-places';
import RoomDetails from './room-details';
import RoomGallery from './room-gallery';

function Room(): JSX.Element {
  const hotel = hotels[0];
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <RoomGallery images={hotel.images} />
        </div>
        <div className="property__container container">
          <RoomDetails hotel={hotel} />
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <NearPlaces hotels={hotels} />
      </div>
    </main>
  );
}

export default Room;
