import { call, put, takeLatest } from 'redux-saga/effects';

import { actions } from '../reducers/promo';

import * as promoApi from '../../api/promo';

export function* applyPromo(action) {
  try {
    const result = yield call(promoApi.applyPromo, action.payload);
    yield put({ type: actions.setDiscount, payload: result.amount / 100 });
  } catch (err) {
    alert('Invalid code!');
  }
}

export default function* Promo() {
  yield takeLatest(actions.applyPromo, applyPromo);
}
