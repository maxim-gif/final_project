import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/avito';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});