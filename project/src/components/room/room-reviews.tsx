import { Comment } from '../../types/comment';
import Review from './review';
import YourReview from './your-review';

type RoomReviewsProps = {
  reviews: Comment[];
};

function RoomReviews({ reviews }: RoomReviewsProps): JSX.Element {
  const reviewRender = (review: Comment) => {
    const key = `review_${review.id}`;
    return <Review key={key} review={review} />;
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">{reviews.map(reviewRender)}</ul>
      <YourReview />
    </section>
  );
}

export default RoomReviews;
