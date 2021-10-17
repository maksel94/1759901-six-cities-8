import { HotelCardType } from '../../enums/hotel-card-type';
import { HotelsWrapperProps } from '../../types/hotel/hotels-wrapper-props';
import Hotels from './hotels';

function CitiesHotels({ className = '', ...restProps }: HotelsWrapperProps): JSX.Element {
  return (
    <Hotels
      className={`cities__places-list tabs__content ${className}`}
      {...restProps}
      hotelCardType={HotelCardType.City}
    />
  );
}

export default CitiesHotels;
