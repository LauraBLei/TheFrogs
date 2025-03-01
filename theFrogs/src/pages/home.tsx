import { useContext } from "react";
import { ProductsContext } from "../types/product";
import { ProductCard } from "../components/product";

export const HomePage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-10 my-5 py-10 shadow-xl bg-[#333] w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-black w-[130px] h-[130px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="./electronics.png"
              alt=""
            />
          </div>
          <p className="text-[#F5F5F5] text-lg">Electronics</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-black w-[130px] h-[130px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="./fashion.png"
              alt=""
            />
          </div>
          <p className="text-[#F5F5F5] text-lg">Fashion</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-black w-[130px] h-[130px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="./Beauty.png"
              alt=""
            />
          </div>
          <p className="text-[#F5F5F5] text-lg">Beauty</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-black w-[130px] h-[130px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="./Toys.png"
              alt=""
            />
          </div>
          <p className="text-[#F5F5F5] text-lg">Toys</p>
        </div>
      </div>
      <details className="w-full relative max-w-[1100px] group">
        <summary className="w-full cursor-pointer text-2xl font-bold hover:bg-[#333333] hover:text-[#F5F5F5] p-2 group-open:bg-[#333333] group-open:text-[#F5F5F5]">
          Categories
        </summary>
        <div className="z-50  bg-[#F5F5F5] p-2 flex w-full absolute md:justify-between md:flex-nowrap gap-2 flex-wrap justify-center ">
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
      <div className="flex md:justify-between flex-wrap w-full max-w-[1100px]">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
