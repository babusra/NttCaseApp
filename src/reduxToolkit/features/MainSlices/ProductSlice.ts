import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialProducts} from '../../../types/Product/InitialProductsModel';
import {Product} from '../../../types/Product/ProductModel';
import {RootState} from '../../../reduxToolkit/store';
import {Dispatch} from 'redux';

const initialState: InitialProducts = {
  allProducts: [],
  filteredProducts: [],
  favoritesProducts: [],
  productsInBasket: [],
  totalProductPrice: 0,
};

const ProductSlice = createSlice({
  name: 'product',
  initialState: {value: initialState},
  reducers: {
    allProductAction: (state, action: PayloadAction<Product[]>) => {
      state.value.allProducts = action.payload.map(product => ({
        ...product,
        total: 0,
      }));
    },

    addToFavoritesAction: (state, action: PayloadAction<Product>) => {
      const productIndex = state.value.allProducts.findIndex(
        product => product.id === action.payload.id,
      );

      if (productIndex !== -1) {
        const updatedAllProducts = [...state.value.allProducts];
        updatedAllProducts[productIndex].isFavorite =
          !updatedAllProducts[productIndex].isFavorite;
        state.value.allProducts = updatedAllProducts;
        state.value.favoritesProducts = updatedAllProducts.filter(
          product => product.isFavorite,
        );
      }
    },

    addToBasketAction: (state, action: PayloadAction<Product>) => {
      const productIndex = state.value.productsInBasket.findIndex(
        product => product.id === action.payload.id,
      );

      if (productIndex !== -1) {
        state.value.productsInBasket[productIndex].total += 1;
        const allProductsIndex = state.value.allProducts.findIndex(
          product => product.id === action.payload.id,
        );

        if (allProductsIndex !== -1) {
          state.value.allProducts[allProductsIndex].total += 1;
        }
      } else {
        state.value.productsInBasket.push({...action.payload, total: 1});
        const allProductsIndex = state.value.allProducts.findIndex(
          product => product.id === action.payload.id,
        );
        if (allProductsIndex !== -1) {
          state.value.allProducts[allProductsIndex].total += 1;
        }
      }

      state.value.totalProductPrice = state.value.productsInBasket.reduce(
        (total, product) => total + Number(product.price) * product.total,
        0,
      );
      state.value.productsInBasket = state.value.allProducts.filter(
        item => item.total !== 0,
      );
    },

    productAmountIncrement: (state, action: PayloadAction<Product>) => {
      const product = state.value.productsInBasket.find(
        item => item.id === action.payload.id,
      );
      if (product) {
        product.total += 1;
        const productOfAllProducts = state.value.allProducts.find(
          item => item.id === action.payload.id,
        );
        if (productOfAllProducts) {
          productOfAllProducts.total += 1;
        }
      }

      state.value.totalProductPrice = state.value.productsInBasket.reduce(
        (total, product) => total + Number(product.price) * product.total,
        0,
      );
      state.value.productsInBasket = state.value.allProducts.filter(
        item => item.total !== 0,
      );
    },

    productAmountDecrement: (state, action: PayloadAction<Product>) => {
      const product = state.value.productsInBasket.find(
        item => item.id === action.payload.id,
      );
      if (product) {
        product.total = Math.max(0, product.total - 1);
        const productOfAllProducts = state.value.allProducts.find(
          item => item.id === action.payload.id,
        );
        if (productOfAllProducts) {
          productOfAllProducts.total = Math.max(
            0,
            productOfAllProducts.total - 1,
          );
        }
      }

      state.value.totalProductPrice = state.value.productsInBasket.reduce(
        (total, product) => total + Number(product.price) * product.total,
        0,
      );
      state.value.productsInBasket = state.value.allProducts.filter(
        item => item.total !== 0,
      );
    },
    sortProducts: (state, action) => {
      switch (action.payload) {
        case 'Ascending':
           state.value.allProducts.sort(
            (a, b) => Number(b.price) - Number(a.price),
          );
          break
        case 'Descending':
           state.value.allProducts.sort(
            (a, b) => Number(a.price) - Number(b.price),
          );
          break
        default:
           break
      }
    },
  },
});

export default ProductSlice.reducer;
export const {
  allProductAction,
  addToBasketAction,
  productAmountDecrement,
  productAmountIncrement,
  addToFavoritesAction,
  sortProducts
} = ProductSlice.actions;
