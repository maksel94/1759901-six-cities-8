import { Dispatch, SetStateAction } from 'react';
import { Hotel } from '../../types/hotel/hotel';
import { HotelComponentProps } from '../../types/hotel/hotel-component-props';
import HotelCard from './hotel-card';

type HotelsProps = HotelComponentProps & {
  setSelectedHotel: Dispatch<SetStateAction<Hotel | undefined>>;
};

function Hotels({ hotels, setSelectedHotel }: HotelsProps): JSX.Element {
  const hotelRender = (hotel: Hotel) => {
    const key = `hotel_${hotel.id}`;
    return <HotelCard key={key} hotel={hotel} setSelectedHotel={setSelectedHotel} />;
  };

  return (
    <div className="cities__places-list places__list tabs__content">{hotels.map(hotelRender)}</div>
  );
}

export default Hotels;
