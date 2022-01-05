import { combineReducers } from 'redux';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    default:
      return state;
  }
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
  count: counterReducer,
  role: isAdminReducer,
});
