import { Review } from "../types/product";
import StarRating from "./rating";

interface reviewProps {
  review: Review;
}

/**
 * Props for the ReviewComponent.
 *
 * @property {Review} review - A single review object containing username, rating, and description.
 */
interface reviewProps {
  review: Review;
}

/**
 * A component for displaying a single user review.
 *
 * - Shows the star rating, reviewer's username, and review text.
 * - Utilizes the `StarRating` component for visualizing the numeric rating.
 *
 * @component
 * @param {reviewProps} props - The props containing a review to display.
 */

export const ReviewComponent: React.FC<reviewProps> = ({ review }) => {
  return (
    <div className="bg-brand-black shadow-2xl text-brand-white p-5  md:max-w-[467px] w-full flex flex-col gap-5">
      <div className="flex gap-5 justify-between w-full">
        <StarRating rating={review.rating} />
        <p>{review.username}</p>
      </div>
      <p className="w-full">{review.description}</p>
    </div>
  );
};
