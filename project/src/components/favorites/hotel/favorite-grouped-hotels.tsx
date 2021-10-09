import { Hotel } from '../../../types/hotel';
import { HotelComponentProps } from '../../../types/hotel-component-props';
import FavoriteHotel from './favorite-hotel';

type FavoriteGroupedHotelsProps = HotelComponentProps & {
  hotelName: string;
};

function FavoriteGroupedHotels({ hotelName, hotels }: FavoriteGroupedHotelsProps): JSX.Element {
  const hotelRender = (hotel: Hotel) => {
    const key = `favorite-hotel-${hotel.id}`;
    return <FavoriteHotel key={key} hotel={hotel} />;
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{hotelName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">{hotels.map(hotelRender)}</div>
    </li>
  );
}

export default FavoriteGroupedHotels;
