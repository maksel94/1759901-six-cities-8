import { Hotel } from '../../../types/hotel';
import { HotelComponentProps } from '../../../types/hotel-component-props';
import HotelCard from './hotel-card';

function Hotels({ hotels }: HotelComponentProps): JSX.Element {
  const hotelRender = (hotel: Hotel) => {
    const key = `hotel_${hotel.id}`;
    return <HotelCard key={key} hotel={hotel} />;
  };

  return (
    <div className="cities__places-list places__list tabs__content">{hotels.map(hotelRender)}</div>
  );
}

export default Hotels;
