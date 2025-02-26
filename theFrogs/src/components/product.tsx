import { ShoppingCart } from "lucide-react";
import { Product } from "../types/product";
import StarRating from "./rating";
import { PriceDisplay } from "./price";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-h-[200px] lg:max-h-[170px] bg-brand-black flex lg:max-w-[500px] w-full mt-4 drop-shadow-xl">
      <div className="overflow-hidden w-[210px] lg:w-[250px]">
        <img
          className="object-cover w-full h-full"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>
      <div className="flex flex-col px-2 justify-evenly w-full">
        <h2 className="text-lg text-white">{product.title}</h2>
        <p className="text-sm text-white">{product.description}</p>
        <div>
          <StarRating rating={product.rating} />
        </div>
        <div className="flex justify-between w-full">
          <div>
            <PriceDisplay
              price={product.price}
              discountedPrice={product.discountedPrice}
            />
          </div>
          <div>
            <ShoppingCart className="w-8 h-8 text-white cursor-pointer scale-95 hover:scale-100 transition ease-in-out duration-300 transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
