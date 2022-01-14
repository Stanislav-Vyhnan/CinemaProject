import { combineReducers } from 'redux';

function addDataToStore(state = [], action) {
  return action.type === 'ADD_DATA_TO_STORE'
    ? state.concat(action.posters)
    : state;
}

function showGenreFilm(state = [], action) {
  if (action.type === 'SHOW_GENRE_FILM') {
    return [...action.films];
  }
  return state;
}

function addFilmInfoById(state = {}, action) {
  if (action.type === 'ADD_FILM_INFO_BY_ID') {
    const { id } = action;
    return { ...state, [id]: { ...action.state } };
  }
  return state;
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
  films: showGenreFilm,
  filmsById: addFilmInfoById,
});
