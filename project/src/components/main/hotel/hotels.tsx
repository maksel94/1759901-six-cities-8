import { Hotel } from '../../../types/hotel';
import HotelCard from './hotel-card';

type HotelsProps = {
  hotels: Hotel[];
};

function Hotels({ hotels }: HotelsProps): JSX.Element {
  const hotelRender = (hotel: Hotel) => {
    const key = `hotel_${hotel.id}`;
    return <HotelCard key={key} hotel={hotel} />;
  };

  return (
    <div className="cities__places-list places__list tabs__content">{hotels.map(hotelRender)}</div>
  );
}

export default Hotels;
