import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { RADIX } from '../../constants';
import YourRating from './your-rating';

function YourReview(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const updateRating = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value, RADIX));
  };

  const updateComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <YourRating setRating={updateRating} />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={updateComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>
          Submit
        </button>
      </div>
    </form>
  );
}

export default YourReview;
