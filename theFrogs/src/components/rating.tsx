import { Star, StarHalf, Star as StarOutline } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

/**
 * Props for the StarRating component.
 *
 * @property {number} rating - The rating value between 0 and 5, which can include half stars (e.g., 3.5).
 */
interface StarRatingProps {
  rating: number;
}

/**
 * Displays a star-based rating component using full, half, and empty stars.
 *
 * - Renders up to 5 stars based on the provided `rating`.
 * - Shows full stars for whole numbers.
 * - Adds a half star if the rating has a decimal component.
 * - Fills remaining slots with empty stars.
 *
 * @component
 * @param {StarRatingProps} props - The props object with the numerical rating.
 */

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1 text-[#F5F5F5]">
      {/* Full Stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`full-${i}`} fill="currentColor" stroke="currentColor" />
        ))}

      {/* Half Star */}
      {hasHalfStar && (
        <StarHalf key="half" fill="currentColor" stroke="currentColor" />
      )}

      {/* Empty Stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <StarOutline key={`empty-${i}`} stroke="currentColor" />
        ))}
    </div>
  );
};

export default StarRating;
