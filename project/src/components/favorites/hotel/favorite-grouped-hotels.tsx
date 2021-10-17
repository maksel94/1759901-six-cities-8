import { HotelComponentProps } from '../../../types/hotel/hotel-component-props';
import FavoriteHotels from '../../hotel/favorite-hotels';

type FavoriteGroupedHotelsProps = HotelComponentProps & {
  hotelName: string;
};

function FavoriteGroupedHotels({ hotelName, hotels }: FavoriteGroupedHotelsProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{hotelName}</span>
          </a>
        </div>
      </div>
      <FavoriteHotels hotels={hotels} />
    </li>
  );
}

export default FavoriteGroupedHotels;
