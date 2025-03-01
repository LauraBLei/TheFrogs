import { useContext } from "react";
import { ProductsContext } from "../types/product";
import StarRating from "../components/rating";
import { PriceDisplay } from "../components/price";
import { ShoppingCart } from "lucide-react";
import { ReviewComponent } from "../components/review";
import { ProductCard } from "../components/product";

export const ProductPage = () => {
  const { product, products, setCart, cart } = useContext(ProductsContext);
  console.log(product);

  return (
    <div className="w-full flex justify-center h-auto">
      {product && (
        <div className="flex flex-col max-w-[1200px] w-full h-full ">
          <div className="p-5 flex flex-wrap md:flex-nowrap w-full justify-center md:justify-between">
            <div className="shadow-2xl max-w-[467px] max-h-[429px] h-full w-full overflow-hidden">
              <img
                className="object-cover w-full h-full "
                src={product.image.url}
                alt={product.image.alt}
              />
            </div>
            <div className="flex flex-col gap-5 p-5 max-w-[500px] ">
              <h1 className="text-xl font-bold">{product?.title}</h1>
              <StarRating rating={product.rating} />
              <p className="text-lg">{product.description}</p>
              <div>
                <PriceDisplay
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                  styling="text-brand-black text-4xl font-bold"
                />
              </div>
              <div
                onClick={() => setCart([...cart, product])}
                className="mt-3 flex justify-between bg-brand-white p-4 shadow-2xl cursor-pointer"
              >
                <p>Add To Cart</p>
                <ShoppingCart />
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-between p-5 gap-5 flex-wrap lg:flex-nowrap ">
            <div>
              <h2 className="text-xl font-semibold mb-4">Reviews:</h2>
              <div className="flex flex-col gap-5">
                {product.reviews.length > 0 ? (
                  <>
                    {product.reviews.map((review) => (
                      <ReviewComponent review={review} />
                    ))}
                  </>
                ) : (
                  <div>There are no reviews</div>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                You might also like:{" "}
              </h3>
              <div>
                {products
                  .filter((item) => {
                    return (
                      product.tags[0] === item.tags[0] && product.id !== item.id
                    );
                  })
                  .map((product) => (
                    <ProductCard product={product} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
