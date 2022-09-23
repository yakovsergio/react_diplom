import { createAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../types/books';
import { ACTIONS } from '../constants';

interface IFavoritesState {
  books: IBook[];
  //favList: IBook[];
  favorites: IBook[];
  Count: number;
}

const initialState: IFavoritesState = {
  books: [],
  favorites: [],
  //itemsCount: 10,
  Count: 0,
};

export const getFavoritesAction = createAction<{
  selPageNo: number;
  Count: number;
  favorites: IBook[];
}>(ACTIONS.GET_FAVORITES);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      /* if (action && action.payload) {
        state.pageCount = state.favList?.length
          ? Math.ceil(state.favList?.length / state.itemsCount)
          : 0;*/
      const books = action.payload.map((book: IBook) => ({ ...book }));
      state.books = books;
      /* } else {
        state.books = [];
        state.pageCount = 1;
        state.selPageNo = 1;
      }*/
    },
    setCount: (state, action) => {
      state.Count = action.payload;
    },
    /* setSelPageNo: (state, action) => {
      if (
        action.payload > 0 &&
        action.payload <= state.pageCount &&
        action.payload <= state.pageCount
      ) {
        state.selPageNo = action.payload;
      }
    },*/
    addToFavorites: (state, action) => {
      state.favorites.push({ ...action.payload, isFavorite: true });
    },
    removeFromFavorites: (state, action) => {
      const ind = state.favorites.findIndex((item: IBook) => {
        return item.isbn13 == action.payload.isbn13;
      });
      if (ind > -1) {
        state.favorites.splice(ind, 1);
      }
    },
  },
});

export const { setFavorites, setCount, addToFavorites, removeFromFavorites } =
  favoritesSlice.actions;

export const getBooks = (state: { favoriteBooks: IFavoritesState }) => ({
  books: state.favoriteBooks.books,
  favorites: state.favoriteBooks.favorites,
  itemsCount: state.favoriteBooks.Count,
});

export const getFavorites = (state: { favoritesSlice: IFavoritesState }) =>
  state.favoritesSlice.favorites;

export default favoritesSlice.reducer;
