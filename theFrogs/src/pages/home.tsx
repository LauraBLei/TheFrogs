import { useContext } from "react";
import { ProductsContext } from "../types/product";
import { ProductCard } from "../components/product";

export const HomePage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-brand-black p-5 pb-15 w-full text-center mb-5 text-brand-white flex flex-col gap-5 items-center">
        <img className="max-w-[200px]" src="/leapingFrog.png" alt="" />
        <h1 className="text-4xl font-bold mt-[-80px] ">
          Welcome to The Frogs!
        </h1>
        <p className="text-2xl">Leapin' deals await! Let's get jumpin'!</p>
      </div>
      <div className="flex md:justify-between flex-wrap w-full max-w-[1100px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cartItem={false} />
        ))}
      </div>
    </div>
  );
};
