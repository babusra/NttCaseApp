import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from './features/AuthSlices/LoginSlice';
import ProductReducer from './features/MainSlices/ProductSlice';

export const Store = configureStore({
  reducer: {
    login: LoginReducer,
    product: ProductReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
