import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import products from './product';
import cart from './cart';

const persistConfig = {
  key: 'root',
  storage: storage,
//   blacklist: ['cart', 'promo'],
};

export default persistCombineReducers(persistConfig, {
  products,
  cart,
});
