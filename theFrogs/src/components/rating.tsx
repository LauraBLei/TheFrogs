import { RailSymbol, Star, StarHalf, Star as StarOutline } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1 text-yellow-400">
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
