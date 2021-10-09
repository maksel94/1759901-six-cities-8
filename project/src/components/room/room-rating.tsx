import * as constants from '../../constants';

type RoomRatingProps = {
  rating: number;
};

//TODO: add stars rating
function RoomRating({ rating }: RoomRatingProps): JSX.Element {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={constants.WIDTH_80}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default RoomRating;
