import { useContext } from "react";
import { ProductsContext } from "../types/product";
import { ProductCard } from "../components/product";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const { cart, products, setCart } = useContext(ProductsContext);
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1200px] p-5 w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center lg:justify-between gap-5 w-full">
          <div className="w-full max-w-[500px]">
            <h1 className="text-2xl font-bold text-center border-b-2 border-brand-black text-brand-black">
              Cart
            </h1>
            <div>
              {cart.length > 0 ? (
                <>
                  {cart.map((product) => (
                    <ProductCard product={product} cartItem={true} />
                  ))}
                </>
              ) : (
                <div>Your cart is empty</div>
              )}
            </div>
          </div>
          <div className="bg-brand-white w-full max-w-[748px] lg:max-w-[430px] p-5 h-auto max-h-[380px]">
            <div className="flex flex-col gap-5 ">
              <div className="flex justify-between text-lg text-brand-black">
                <p>Shipping</p>
                <p>25 NOK</p>
              </div>
              <div className="flex justify-between text-lg text-brand-black">
                <p>Total</p>
                <p>
                  {cart
                    .reduce((accumulator, product) => {
                      return product.price + accumulator;
                    }, 0)
                    .toFixed(2)}{" "}
                  NOK
                </p>
              </div>
              <div className="flex justify-between text-lg text-brand-black">
                <p>Total Discount</p>
                <p>
                  {" "}
                  {cart
                    .reduce((accumulator, product) => {
                      return (
                        product.price - product.discountedPrice + accumulator
                      );
                    }, 0)
                    .toFixed(2)}{" "}
                  NOK
                </p>
              </div>
            </div>
            <div className="flex justify-between text-lg text-brand-black my-10">
              <p>Total to pay now</p>
              <p>
                {" "}
                {cart
                  .reduce((accumulator, product) => {
                    return product.discountedPrice + accumulator + 25;
                  }, 0)
                  .toFixed(2)}{" "}
                NOK
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Link
                onClick={() => setCart([])}
                to="/confirmation"
                className="bg-brand-black text-brand-white font-bold w-full text-center p-3 text-3xl"
              >
                PAY
              </Link>
              <Link to="/" className="text-lg text-brand-black">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full">
          <h2 className="text-2xl font-bold text-center border-b-2 border-brand-black text-brand-black">
            Recommended:
          </h2>
          <div className="flex md:justify-between  flex-wrap w-full ">
            {products
              .filter((item) => {
                const notInCart = !cart.includes(item);

                const hasMatchingTags = cart.some((cartItem) =>
                  item.tags.some((tag) => cartItem.tags.includes(tag))
                );

                return notInCart && hasMatchingTags;
              })
              .map((product) => (
                <ProductCard product={product} cartItem={false} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
