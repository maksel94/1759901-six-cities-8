import { Hotel } from '../../types/hotel/hotel';
import { HotelsProps } from '../../types/hotel/hotels-props';
import HotelCard from './hotel-card';

function Hotels({
  hotels,
  className,
  setSelectedHotel,
  hotelCardType,
  ...restProps
}: HotelsProps): JSX.Element {
  const hotelRender = (hotel: Hotel) => {
    const key = `hotel_${hotel.id}`;
    return (
      <HotelCard
        key={key}
        hotel={hotel}
        setSelectedHotel={setSelectedHotel}
        hotelCardType={hotelCardType}
      />
    );
  };

  return (
    <div className={`places__list ${className}`} {...restProps}>
      {hotels.map(hotelRender)}
    </div>
  );
}

export default Hotels;
