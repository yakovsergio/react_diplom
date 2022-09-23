import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
// import { AuthService } from '../../services/api/AuthService';
// import { UserService } from '../../services/api/UserService';
//import { ITokens, IProfile } from '../../types/user';

//import { setProfile, setErrorActivation } from '../slices/authSlice';
import { addBooks } from '../slices/booksSlice';
import { setFavorites } from '../slices/favoritesSlice';
import { setBook } from '../slices/bookSlice';
import { IBooksInfo, IBook } from '../../types/books';
import { BooksService } from '../../services/api/BookService';

function* getNewBooksSaga() {
  try {
    /*const data: { data: IBooksInfo } = yield call(() => BooksService.getNewBooks());

    yield put(addBooks(data.data.results));*/
    const result: { data: IBooksInfo } = yield call(() => BooksService.getNewBooks());
    const books = result?.data as IBooksInfo;
    yield put(addBooks(books));
  } catch (e) {
    console.log({ e });
  }
}

function* getFavoritesSaga({ payload }: any) {
  try {
    const books: { books: IBook[] } = yield call(() => payload.favorites);

    yield put(setFavorites(books));
  } catch (e) {
    console.log(e);
  }
}

// function* getMyPostsSaga() {
//   try {
//     const data: { data: ITokens } = yield call(() => PostsService.getMyPosts());

//     yield put(setMyPosts(data.data));
//   } catch (e) {
//     // console.log({ e });
//     yield put(setErrorActivation('Error'));
//   }
// }

function* getBookSaga({ payload }: any) {
  try {
    const result: { data: IBook } = yield call(() => BooksService.getBook(payload.isbn13));
    const book = result?.data as IBook;
    const ind = payload.favorites.findIndex((item: IBook) => {
      return item.isbn13 == book.isbn13;
    });
    if (ind > -1) {
      book.isFavorite = true;
    } else {
      book.isFavorite = false;
    }
    yield put(setBook(book));
  } catch (e) {
    console.log(e);
  }
}

// function* sendPostSaga({ payload }: any) {
//   try {
//     yield call(() => PostsService.sendPost(payload));

//     yield put(setIsSendedPost(true));
//   } catch (e) {
//     // console.log({ e });
//     yield put(setIsSendedPost(false));
//   }
// }

export function* booksSaga() {
  //yield takeEvery(ACTIONS.SEND_POST, sendPostSaga);
  yield takeEvery(ACTIONS.GET_NEW_BOOKS, getNewBooksSaga);
  yield takeEvery(ACTIONS.GET_FAVORITES, getFavoritesSaga);
  yield takeEvery(ACTIONS.GET_BOOK, getBookSaga);
}
