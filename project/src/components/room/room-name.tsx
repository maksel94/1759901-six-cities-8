import { useState } from 'react';

type RoomNameProps = {
  shortDescription: string;
  isHotelFavorite: boolean;
};

function RoomName({ shortDescription, isHotelFavorite }: RoomNameProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(isHotelFavorite);

  const onFavoriteButtonClick = () => {
    setIsFavorite(!isFavorite);
  };

  const favoriteButtonStyle = isFavorite ? 'property__bookmark-button--active' : '';
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">{shortDescription}</h1>
      <button
        className={`property__bookmark-button ${favoriteButtonStyle} button`}
        onClick={onFavoriteButtonClick}
        type="button"
      >
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

export default RoomName;
