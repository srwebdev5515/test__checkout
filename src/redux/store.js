import { applyMiddleware , createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducer from './reducers';
import mainSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mainSaga);

export default store;
export const persistor = persistStore(store);
