import { Link } from 'react-router-dom';

import { Hotel } from '../../types/hotel/hotel';
import * as constants from '../../constants';
import { ApartmentType } from '../../enums/apartment-type';
import { getRoomUrl } from '../../service/hotels';

type NearPlaceProps = {
  hotel: Hotel;
};

//TODO: add stars rating
function NearPlace({ hotel }: NearPlaceProps): JSX.Element {
  const favoriteButtonStyle = hotel.isFavorite ? 'place-card__bookmark-button--active' : '';
  const linkToHotelDetails = getRoomUrl(hotel.id);

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={linkToHotelDetails}>
          <img
            className="place-card__image"
            src={hotel.images[0]}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{hotel.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${favoriteButtonStyle} button`}
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
            <span style={constants.WIDTH_80}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{hotel.name}</a>
        </h2>
        <p className="place-card__type">{ApartmentType[hotel.type]}</p>
      </div>
    </article>
  );
}

export default NearPlace;
