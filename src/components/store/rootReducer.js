import { combineReducers } from 'redux';

function addDataToStore(state = [], action) {
  return action.type === 'ADD_DATA_TO_STORE'
    ? [...state, ...action.posters]
    : state;
}

function isAdminReducer(state = 'user', action) {
  switch (action.type) {
    case 'IS_ADMIN': {
      return 'admin';
    }
    case 'IS_USER': {
      return 'user';
    }
    default:
      return state;
  }
}

export default combineReducers({
  posters: addDataToStore,
  role: isAdminReducer,
});
