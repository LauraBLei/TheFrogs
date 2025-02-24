import { useContext } from "react";
import { ProductsContext } from "../types/product";
import { ProductCard } from "../components/product";

export const HomePage = () => {
  const { products } = useContext(ProductsContext);
  console.log("home", products);

  return (
    <div>
      <div className="flex justify-center gap-10 my-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-black w-[130px] h-[130px] rounded-full">
            {/* <img src="" alt="" /> */}
          </div>
          <p>Electronics</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-black w-[130px] h-[130px] rounded-full">
            {/* <img src="" alt="" /> */}
          </div>
          <p>Fashion</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-black w-[130px] h-[130px] rounded-full">
            {/* <img src="" alt="" /> */}
          </div>
          <p>Beauty</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-black w-[130px] h-[130px] rounded-full">
            {/* <img src="" alt="" /> */}
          </div>
          <p>Toys</p>
        </div>
      </div>
      <details className="w-full relative ">
        <summary className="w-full cursor-pointer text-2xl font-bold ">
          Categories
        </summary>
        <div className="flex w-full absolute md:justify-between md:flex-nowrap gap-2 flex-wrap justify-center ">
          <div className="sm:max-w-[250px] w-full">
            <p className="text-2xl border-b-2 border-black px-4 w-full">
              Electronics
            </p>
            <ul>
              <li>Headphones</li>
              <li>Storage</li>
              <li>Audio</li>
              <li>Peripherals</li>
              <li>Gaming</li>
              <li>Computers</li>
              <li>Wearables</li>
            </ul>
          </div>
          <div className="sm:max-w-[250px] w-full">
            <p className="text-2xl border-b-2 border-black px-4 w-full">
              Fashion
            </p>
            <ul>
              <li>Bags</li>
              <li>Shoes</li>
              <li>Glasses</li>
              <li>Accessories</li>
              <li>Watch</li>
              <li>Jewelry</li>
            </ul>
          </div>
          <div className="sm:max-w-[250px] w-full">
            <p className="text-2xl border-b-2 border-black px-4 w-full">
              Beauty
            </p>
            <ul>
              <li>Perfume</li>
              <li>Skin Care</li>
              <li>Shampoo</li>
            </ul>
          </div>
          <div className="sm:max-w-[250px] w-full">
            <p className="text-2xl border-b-2 border-black px-4 w-full">Toys</p>
            <ul>
              <li>Toys</li>
            </ul>
          </div>
        </div>
      </details>
      <div>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
