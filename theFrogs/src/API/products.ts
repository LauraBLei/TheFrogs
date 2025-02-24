import { Product } from "../types/product";
import { API } from "./endpoints";
import { headers } from "./headers";

export const readProducts = async (setProducts: (input: Product[]) => void) => {
  try {
    console.log("Blob", API.PRODUCTS);

    const response = await fetch(API.PRODUCTS, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const products = await response.json();
      console.log("API:", products.data);

      setProducts(products.data);
    }
  } catch {
    alert("something went wrong trying to fetch products");
  }
};
