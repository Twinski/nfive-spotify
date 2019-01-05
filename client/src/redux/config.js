import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from './sagas';

if (typeof window === 'undefined') {
  global.window = {};
}

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(
  applyMiddleware(sagaMiddleware, loggerMiddleware),
  devtools,
);

const store = createStore(
  rootReducer,
  {}, // initial state
  enhancer,
);

sagaMiddleware.run(sagas);

export default store;
