import { Product } from "../types/product";
import { API } from "./endpoints";
import { headers } from "./headers";

export const readProducts = async (setProducts: (input: Product[]) => void) => {
  try {
    const response = await fetch(API.PRODUCTS, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const products = await response.json();

      setProducts(products.data);
    }
  } catch {
    alert("something went wrong trying to fetch products");
  }
};

export const readProduct = async (id: string) => {
  try {
    const response = await fetch(API.PRODUCTS + "/" + id, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const product = await response.json();

      return product.data;
    }
  } catch {
    alert("something went wrong trying to fetch products");
  }
};
