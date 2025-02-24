import { useEffect, useState } from "react";
import { Product, ProductsContext } from "../types/product";
import { readProducts } from "../API/products";

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider = ({ children }: ContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log("inside useeffect, products:", products);

    if (products.length === 0) {
      readProducts(setProducts);
    }
  }, [setProducts, products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
