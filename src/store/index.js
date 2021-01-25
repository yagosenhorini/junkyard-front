import { applyMiddleware, compose, createStore } from 'redux';

import reducer from './ducks';

const thunk = (store) => (next) => (action) => {
  if(typeof action === 'function'){
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancer(applyMiddleware(thunk));

const store = createStore(reducer, middleware);

export default store;