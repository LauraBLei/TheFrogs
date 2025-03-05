import { useContext } from "react";
import { ProductsContext } from "../types/product";
import { ProductCard } from "../components/product";
import { Divide } from "lucide-react";

export const SearchPage = () => {
  const { search } = useContext(ProductsContext);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl border-b-2 py-4 border-brand-black font-bold text-brand-black w-full max-w-[1100px] mb-5">
        Search
      </h1>
      <div className="flex md:justify-between flex-wrap w-full max-w-[1100px]">
        {search.length > 0 ? (
          <>
            {search.map((product) => (
              <ProductCard product={product} cartItem={false} />
            ))}
          </>
        ) : (
          <div className=" w-full text-center text-brand-black text-2xl">
            No items found.
          </div>
        )}
      </div>
    </div>
  );
};
