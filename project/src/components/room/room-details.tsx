import { Comment } from '../../types/comment';
import { Hotel } from '../../types/hotel';
import RoomFeatures from './room-features';
import RoomHost from './room-host';
import RoomInside from './room-inside';
import RoomMark from './room-mark';
import RoomName from './room-name';
import RoomPrice from './room-price';
import RoomRating from './room-rating';
import RoomReviews from './room-reviews';

type RoomDetailsProps = {
  hotel: Hotel;
  reviews: Comment[];
};

//TODO: question how to map room reviews?.
function RoomDetails({ hotel, reviews }: RoomDetailsProps): JSX.Element {
  return (
    <div className="property__wrapper">
      {hotel.isPremium && <RoomMark />}
      <RoomName shortDescription={hotel.title} isHotelFavorite={hotel.isFavorite} />
      <RoomRating rating={hotel.rating} />
      <RoomFeatures
        apartmentType={hotel.type}
        bedrooms={hotel.bedrooms}
        maxAdults={hotel.maxAdults}
      />
      <RoomPrice price={hotel.price} />
      <RoomInside goods={hotel.goods} />
      <RoomHost host={hotel.host} propertyDescription={hotel.description} />
      <RoomReviews reviews={reviews} />
    </div>
  );
}

export default RoomDetails;
