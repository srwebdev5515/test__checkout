import { all } from 'redux-saga/effects';

import ProductSaga from './product';

export default function* mainSaga() {
  yield all([
    ProductSaga(),
  ]);
}
