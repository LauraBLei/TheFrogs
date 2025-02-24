interface PriceDisplayProps {
  price: number;
  discountedPrice?: number;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  discountedPrice,
}) => {
  const hasDiscount = discountedPrice && discountedPrice < price;

  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      {hasDiscount ? (
        <>
          <span className="text-white">{discountedPrice.toFixed(2)} NOK</span>
          <span className="text-gray-400 line-through">
            {price.toFixed(2)} NOK
          </span>
        </>
      ) : (
        <span className="text-white">{price.toFixed(2)} NOK</span>
      )}
    </div>
  );
};
