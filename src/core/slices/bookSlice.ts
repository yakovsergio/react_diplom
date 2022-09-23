import { createAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../types/books';
import { ACTIONS } from '../constants';

interface IBookState {
  book: IBook | null;
}

const initialState: IBookState = {
  book: null,
};

export const getBookAction = createAction<{ isbn13: string; favorites: IBook[] }>(ACTIONS.GET_BOOK);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
    },
    setFavorite: (state, action) => {
      state.book = { ...action.payload, isFavorite: action.payload.isFavorite };
    },
  },
});

export const { setBook, setFavorite } = bookSlice.actions;

export const getBook = (state: { bookSlice: IBookState }) => state.bookSlice.book;

export default bookSlice.reducer;
