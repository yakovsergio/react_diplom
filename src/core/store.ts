import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './saga';
import booksSlice from './slices/booksSlice';
import favoritesSlice from './slices/favoritesSlice';
import bookSlice from './slices/bookSlice';
//import authSlide from './slices/authSlice';

// const sagaMiddleware = createSagaMiddleware();

// export const initialRootState = {
//   ...store.getState(),
// };

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    //auth: authSlide,
    books: booksSlice,
    bookSlice: bookSlice,
    favoritesSlice: favoritesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
