interface PriceDisplayProps {
  price: number;
  discountedPrice?: number;
  styling: string;
}

/**
 * Props for the PriceDisplay component.
 *
 * @property {number} price - The original price of the product.
 * @property {number} [discountedPrice] - An optional discounted price; if present and lower than `price`, it will be shown instead.
 * @property {string} styling - CSS class(es) to apply to the discounted price.
 */
interface PriceDisplayProps {
  price: number;
  discountedPrice?: number;
  styling: string;
}

/**
 * A component that displays the product price.
 *
 * If a valid discounted price is provided and is lower than the original price,
 * it displays the discounted price prominently and shows the original price with a strikethrough.
 * Otherwise, it displays only the original price.
 *
 * @component
 * @param {PriceDisplayProps} props - Props containing price info and styling class.
 */

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
