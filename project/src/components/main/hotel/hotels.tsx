import { Dispatch, SetStateAction } from 'react';
import { Hotel } from '../../../types/hotel';
import { HotelComponentProps } from '../../../types/hotel-component-props';
import HotelCard from './hotel-card';

type HotelsProps = HotelComponentProps & {
  setActiveHotel: Dispatch<SetStateAction<Hotel | null>>;
};

function Hotels({ hotels, setActiveHotel }: HotelsProps): JSX.Element {
  const hotelRender = (hotel: Hotel) => {
    const key = `hotel_${hotel.id}`;
    return <HotelCard key={key} hotel={hotel} setActiveHotel={setActiveHotel} />;
  };

  return (
    <div className="cities__places-list places__list tabs__content">{hotels.map(hotelRender)}</div>
  );
}

export default Hotels;
