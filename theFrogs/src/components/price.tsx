interface PriceDisplayProps {
  price: number;
  discountedPrice?: number;
  styling: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  discountedPrice,
  styling,
}) => {
  const hasDiscount = discountedPrice && discountedPrice < price;

  return (
    <div className="flex items-center justify-between gap-2 max-w-[350px] text-lg font-semibold">
      {hasDiscount ? (
        <>
          <span className={styling}>{discountedPrice.toFixed(2)} NOK</span>
          <span className=" text-brand-white line-through">
            {price.toFixed(2)} NOK
          </span>
        </>
      ) : (
        <span className="text-white">{price.toFixed(2)} NOK</span>
      )}
    </div>
  );
};
