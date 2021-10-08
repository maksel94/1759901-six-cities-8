import RoomFeatures from './room-features';
import RoomHost from './room-host';
import RoomInside from './room-inside';
import RoomMark from './room-mark';
import RoomName from './room-name';
import RoomPrice from './room-price';
import RoomRating from './room-rating';
import RoomReviews from './room-reviews';

function RoomDetails(): JSX.Element {
  return (
    <div className="property__wrapper">
      <RoomMark />
      <RoomName />
      <RoomRating />
      <RoomFeatures />
      <RoomPrice />
      <RoomInside />
      <RoomHost />
      <RoomReviews />
    </div>
  );
}

export default RoomDetails;
