import { Product } from "../types/product";
import StarRating from "./rating";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-h-[150px]  flex max-w-[500px]">
      <div className="overflow-hidden max-w-[160px]">
        <img
          className="object-cover"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>
      <div>
        <h2 className="text-lg">{product.title}</h2>
        <p className="text-sm">{product.description}</p>
        <div>
          <StarRating rating={product.rating} />
        </div>
        <div className="flex gap-4">
          <div>price</div>
          <div>Cart icon</div>
        </div>
      </div>
    </div>
  );
};
