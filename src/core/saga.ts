import { all } from 'redux-saga/effects';

import { booksSaga } from './sagas';

export function* rootSaga() {
  try {
    yield all([booksSaga()]);
  } catch (e) {
    console.log({ e });
  }
}
