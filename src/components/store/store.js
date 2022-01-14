import { createStore } from 'redux';
import rootReducer from './rootReducer';

// import { createStore, applyMiddleware } from 'redux';
// import middleware from './middlewares/middleware';

// const middlewares = [middleware];
// const middlewareEnhancer = applyMiddleware(...middlewares);

const initialState = {
  posters: [],
  role: 'user',
  films: [],
  filmsById: [],
};
const store = createStore(rootReducer, initialState);

export default store;
