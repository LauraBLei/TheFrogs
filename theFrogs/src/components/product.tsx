import { ShoppingCart, SquareX } from "lucide-react";
import { Product, ProductsContext } from "../types/product";
import StarRating from "./rating";
import { PriceDisplay } from "./price";
import { Link } from "react-router-dom";
import { useContext } from "react";

interface ProductCardProps {
  product: Product;
  cartItem: boolean;
}

/**
 * Props for the ProductCard component.
 *
 * @property {Product} product - The product data to display in the card.
 * @property {boolean} cartItem - Indicates if the product is already in the cart (true) or not (false).
 */
interface ProductCardProps {
  product: Product;
  cartItem: boolean;
}

/**
 * A product card component that displays product details,
 * including image, title, description, rating, and price.
 *
 * - Allows users to add the product to the cart if it's not already there.
 * - If `cartItem` is true, shows a remove-from-cart button instead.
 *
 * @component
 * @param {ProductCardProps} props - Props containing product info and cart status.
 */

/**
 * Handles the "Add to Cart" button click.
 * Prevents navigation and adds the product to the cart if not already present.
 *
 * @param {React.MouseEvent} e - The click event.
const handleAddToCart = (e: React.MouseEvent): void => { ... }
 */

/**
 * Handles the "Remove from Cart" button click.
 * Prevents navigation and removes the product from the cart.
 *
 * @param {React.MouseEvent} e - The click event.
 * @param {Product} productToRemove - The product to remove from the cart.
const handleRemoveFromCart = (
  e: React.MouseEvent,
  productToRemove: Product
): void => { ... }
 */

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cartItem,
}) => {
  const { setCart, cart } = useContext(ProductsContext);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents the Link from being triggered

    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart([...cart, product]);
    } else {
      alert("Product is already in the cart");
    }
  };

  const handleRemoveFromCart = (
    e: React.MouseEvent,
    productToRemove: Product
  ) => {
    e.preventDefault();
    setCart(cart.filter((item) => item.id !== productToRemove.id));
  };

  return (
    <Link
      to={{ pathname: "/product/", search: `?id=${product.id}` }}
      className="h-[200px] lg:h-[170px] bg-brand-black flex lg:max-w-[500px] w-full mt-4 drop-shadow-xl"
    >
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
        <div className="flex justify-between w-full ">
          <div>
            <PriceDisplay
              price={product.price}
              discountedPrice={product.discountedPrice}
              styling="text-brand-white"
            />
          </div>
          <div>
            {cartItem === false ? (
              <ShoppingCart
                onClick={handleAddToCart}
                className="w-8 h-8 text-white cursor-pointer scale-95 hover:scale-100 transition ease-in-out duration-300 transform"
              />
            ) : (
              <SquareX
                onClick={(event) => handleRemoveFromCart(event, product)}
                className="w-8 h-8 text-white cursor-pointer scale-95 hover:scale-100 transition ease-in-out duration-300 transform"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
