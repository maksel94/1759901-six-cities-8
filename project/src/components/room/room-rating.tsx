import * as constants from '../../constants';

function RoomRating(): JSX.Element {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={constants.WIDTH_80}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">4.8</span>
    </div>
  );
}

export default RoomRating;
