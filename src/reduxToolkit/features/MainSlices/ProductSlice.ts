import {createSlice} from '@reduxjs/toolkit';
import {InitialProducts} from '../../../types/Product/InitialProductsModel';
import {Product} from '../../../types/Product/ProductModel';

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
    allProductAction: (state, action) => {
      state.value.allProducts = action.payload;
      state.value.allProducts.map(function (obj: any) {
        obj.total = 0;
      });
    },
    addToBasketAction: (state, action) => {
      const productIndex = state.value.productsInBasket.findIndex(
        product => product.id === action.payload.id,
      );

      if (productIndex !== -1) {
        state.value.productsInBasket[productIndex].total += 1;
      } else {
        state.value.productsInBasket.push({...action.payload, total: 1});
      }

      state.value.totalProductPrice = state.value.productsInBasket.reduce(
        (total, product) => total + Number(product.price) * product.total,
        0,
      );
    },
    productAmountIncrement: (state, action) => {
      const product = state.value.productsInBasket.find(
        item => item.id === action.payload.id,
      );
      if (product) {
        product.total += 1;
      }

      state.value.totalProductPrice = state.value.productsInBasket.reduce(
        (total, product) => total + Number(product.price) * product.total,
        0,
      );
    },
    productAmountDecrement: (state, action) => {
      const product = state.value.productsInBasket.find(
        item => item.id === action.payload.id,
      );
      if (product) {
        product.total = Math.max(0, product.total - 1);
      }

      state.value.totalProductPrice = state.value.productsInBasket.reduce(
        (total, product) => total + Number(product.price) * product.total,
        0,
      );
    },
  },
});

export default ProductSlice.reducer;
export const {
  allProductAction,
  addToBasketAction,
  productAmountDecrement,
  productAmountIncrement,
} = ProductSlice.actions;
