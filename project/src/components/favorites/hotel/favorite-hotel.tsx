import { Hotel } from '../../../types/hotel';
import * as constants from '../../../constants';
import { ApartmentType } from '../../../enums/apartment-type';
import { Link } from 'react-router-dom';

type FavoriteHotelProps = {
  hotel: Hotel;
};

//TODO: add rating
function FavoriteHotel({ hotel }: FavoriteHotelProps): JSX.Element {
  const hotelType = ApartmentType[hotel.type];
  const roomRedirectLink = `${constants.AppRoute.Room}${hotel.id}`;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={roomRedirectLink}>
          <img
            className="place-card__image"
            src={hotel.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{hotel.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={constants.WIDTH_100}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={roomRedirectLink}>{hotel.title}</Link>
        </h2>
        <p className="place-card__type">{hotelType}</p>
      </div>
    </article>
  );
}

export default FavoriteHotel;
