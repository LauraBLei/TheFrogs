import { createContext } from "react";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Media;
  rating: number;
  tags: string[];
  reviews: Review[];
};

export type Media = {
  url: string;
  alt: string;
};

export type Review = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

type ProductContextType = {
  products: Product[];
  product: Product | null;
  cart: Product[];
  isOpen: boolean;
  search: Product[];
  setProducts: (input: Product[]) => void;
  setSearch: (input: Product[]) => void;
  setProduct: (input: Product) => void;
  setCart: (input: Product[]) => void;
  setIsOpen: (input: boolean) => void;
};

export const ProductsContext = createContext<ProductContextType>(
  {} as ProductContextType
);
