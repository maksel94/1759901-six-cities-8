import { HotelCardType } from '../../enums/hotel-card-type';
import { HotelsWrapperProps } from '../../types/hotel/hotels-wrapper-props';
import Hotels from './hotels';

function NearHotels({ className = '', ...restProps }: HotelsWrapperProps): JSX.Element {
  return (
    <Hotels
      className={`near-places__list tabs__content ${className}`}
      hotelCardType={HotelCardType.Near}
      {...restProps}
    />
  );
}

export default NearHotels;
