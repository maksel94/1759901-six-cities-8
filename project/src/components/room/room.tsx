import NearPlaces from './near-places';
import RoomDetails from './room-details';
import RoomGallery from './room-gallery';

function Room(): JSX.Element {
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <RoomGallery />
        </div>
        <div className="property__container container">
          <RoomDetails />
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <NearPlaces />
      </div>
    </main>
  );
}

export default Room;
