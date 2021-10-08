import { Hotel } from '../../../types/hotel';
import * as constants from '../../../constants';
import { ApartmentType } from '../../../enums/apartment-type';

type HotelCardProps = {
  hotel: Hotel;
};

//TODO: add rating
function HotelCard({ hotel }: HotelCardProps): JSX.Element {
  const bookmarkIconStyle = hotel.isFavorite ? 'place-card__bookmark-button--active' : '';
  const hotelType = ApartmentType[hotel.type];

  return (
    <article className="cities__place-card place-card">
      {hotel.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={hotel.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{hotel.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${bookmarkIconStyle} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={constants.WIDTH_80}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{hotel.title}</a>
        </h2>
        <p className="place-card__type">{hotelType}</p>
      </div>
    </article>
  );
}

export default HotelCard;
