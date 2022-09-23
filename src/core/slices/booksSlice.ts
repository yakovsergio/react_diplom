import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IBooksInfo, IBook } from '../../types/books';
import { ACTIONS } from '../constants';
//const API_URL = 'https://api.itbook.store/1.0/new';

export const getNewBooksAction = createAction(ACTIONS.GET_NEW_BOOKS);

interface IBookState {
  books: IBooksInfo | null;
  searchValue: string;
  orderingValue: string;
}

const initialState: IBookState = {
  books: null,
  searchValue: '',
  orderingValue: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      console.log('addbooks');
      const books = action.payload.results?.map((book: IBook) => ({ ...book, isFavorite: false }));
      state.books = { ...action.payload, results: books };
      //state.books = action.payload;
      //console.log(state.books);
    },
    removeBooks: (state) => {
      state.books = null;
    },
    toggleFavorite: (state, action) => {
      if (state.books) {
        const newBooks = state?.books.books.map((book: IBook) => ({
          ...book,
          isFavorite: book.isbn13 === action.payload ? !book.isFavorite : book.isFavorite,
        }));
        state.books = { ...state.books, books: newBooks };
      }
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setOrderingValue: (state, action) => {
      state.orderingValue = action.payload;
    },
  },
});

// export const getBooksAsync = ({ searchValue, orderingValue }: { searchValue: string, orderingValue: string }) => async (dispatch: any) => {
//   try {
//     const response = await axios.get(`${API_URL}`);
//     dispatch(addBooks(response.data));
//   } catch (err: any) {
//     throw new Error(err);
//   }
// };

export const { addBooks, removeBooks, toggleFavorite, setOrderingValue, setSearchValue } =
  booksSlice.actions;
export const showBooks = ({
  books: { books, searchValue, orderingValue },
}: {
  books: IBookState;
}) => ({ books, searchValue, orderingValue });

// export const showFavoritesBooks = (state: { books: IBookState }) =>
//   state.books || state.books.filter((post: IBook) => book.isFavorite);
export default booksSlice.reducer;

// || st.posts.filter((post: IPost) => post.isFavorite)

// export const getTodoAsync = (data) => async (dispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}/${data}`);
//     dispatch(getTodo(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// export const addTodoAsync = (data) => async (dispatch) => {
//   try {
//     // console.log(data);
//     const response = await axios.post(API_URL, data);
//     // console.log(response);
//     dispatch(addTodo(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };
