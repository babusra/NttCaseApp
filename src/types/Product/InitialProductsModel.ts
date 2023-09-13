import {Product} from './ProductModel';

export type InitialProducts = {
  allProducts: Product[];
  filteredProducts: Product[];
  favoritesProducts: Product[];
  productsInBasket: Product[];
  totalProductPrice: number;
};
