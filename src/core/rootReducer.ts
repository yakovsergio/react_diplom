import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './slices/booksSlice';
import bookSlice from './slices/bookSlice';
import favoritesSlice from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    books: booksSlice,
    bookSlice: bookSlice,
    favoritesSlice: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
