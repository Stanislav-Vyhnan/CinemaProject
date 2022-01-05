import { createStore } from 'redux';
import rootReducer from './rootReducer';

// import { createStore, applyMiddleware } from 'redux';
// import middleware from './middlewares/middleware';

// const middlewares = [middleware];
// const middlewareEnhancer = applyMiddleware(...middlewares);

const initialState = {
  count: 1,
  role: 'user',
};
const store = createStore(rootReducer, initialState);

export default store;
