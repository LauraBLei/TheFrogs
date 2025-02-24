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

  setProducts: (input: Product[]) => void;
};

export const ProductsContext = createContext<ProductContextType>(
  {} as ProductContextType
);
