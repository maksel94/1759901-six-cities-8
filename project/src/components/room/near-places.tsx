import { Hotel } from '../../types/hotel/hotel';
import NearPlace from './near-place';

type NearPlacesProps = { hotels: Hotel[] };
function NearPlaces({ hotels }: NearPlacesProps): JSX.Element {
  const nearHotelRender = (hotel: Hotel) => {
    const key = `near_hotel_${hotel.id}`;
    return <NearPlace key={key} hotel={hotel} />;
  };

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">{hotels.map(nearHotelRender)}</div>
    </section>
  );
}

export default NearPlaces;
