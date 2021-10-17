import { Dispatch, SetStateAction } from 'react';
import { Hotel } from '../../types/hotel/hotel';
import * as constants from '../../constants';
import { ApartmentType } from '../../enums/apartment-type';
import { Link } from 'react-router-dom';
import { getRoomUrl } from '../../service/hotels';

type HotelCardProps = {
  hotel: Hotel;
  setSelectedHotel: Dispatch<SetStateAction<Hotel | undefined>>;
};

//TODO: add rating
function HotelCard({ hotel, setSelectedHotel }: HotelCardProps): JSX.Element {
  const bookmarkIconStyle = hotel.isFavorite ? 'place-card__bookmark-button--active' : '';
  const hotelType = ApartmentType[hotel.type];
  const linkToHotelDetails = getRoomUrl(hotel.id);

  const onHotelHover = (): void => {
    setSelectedHotel(hotel);
  };

  const onHotelLeave = (): void => {
    setSelectedHotel(undefined);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={onHotelHover}
      onMouseLeave={onHotelLeave}
    >
      {hotel.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
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
          <Link to={linkToHotelDetails}>{hotel.title}</Link>
        </h2>
        <p className="place-card__type">{hotelType}</p>
      </div>
    </article>
  );
}

export default HotelCard;
