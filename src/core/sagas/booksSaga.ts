import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
// import { AuthService } from '../../services/api/AuthService';
// import { UserService } from '../../services/api/UserService';
//import { ITokens, IProfile } from '../../types/user';

//import { setProfile, setErrorActivation } from '../slices/authSlice';
import { addBooks } from '../slices/booksSlice';
import { IBooksInfo } from '../../types/books';
import { BooksService } from '../../services/api/BookService';

function* getNewBooksSaga() {
  try {
    /*const data: { data: IBooksInfo } = yield call(() => BooksService.getNewBooks());

    yield put(addBooks(data.data.results));*/
    const res: { data: IBooksInfo } = yield call(() => BooksService.getNewBooks());
    const books = res?.data as IBooksInfo;
    yield put(addBooks(books));
  } catch (e) {
    console.log({ e });
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
}
