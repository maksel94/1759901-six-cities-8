import { HotelCardType } from '../../enums/hotel-card-type';
import { HotelsWrapperProps } from '../../types/hotel/hotels-wrapper-props';
import Hotels from './hotels';

function FavoriteHotels({ className = '', ...restProps }: HotelsWrapperProps): JSX.Element {
  return (
    <Hotels
      className={`favorites__places ${className}`}
      {...restProps}
      hotelCardType={HotelCardType.Favorite}
    />
  );
}

export default FavoriteHotels;
