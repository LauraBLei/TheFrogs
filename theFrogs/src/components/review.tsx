import { Review } from "../types/product";
import StarRating from "./rating";

interface reviewProps {
  review: Review;
}

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
