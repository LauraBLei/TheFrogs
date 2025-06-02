import { Product } from "../types/product";
import { API } from "./endpoints";
import { headers } from "./headers";

/**
 * Fetches a list of products from the API and updates the local state using the provided setter.
 *
 * @param {function(Product[]): void} setProducts - A setter function to update the product list in state.
 * @returns {Promise<void>} A promise that resolves when the products are fetched and state is updated.
 */
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

/**
 * Fetches a single product by its ID from the API.
 *
 * @param {string} id - The ID of the product to retrieve.
 * @returns {Promise<Product | undefined>} A promise that resolves to the fetched product, or undefined if an error occurred.
 */

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
