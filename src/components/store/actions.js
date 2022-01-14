export function addPostersToStore(state) {
  return { type: 'ADD_DATA_TO_STORE', posters: state };
}

export function showGenreFilm(state) {
  return { type: 'SHOW_GENRE_FILM', films: state };
}
export function isAdmin() {
  return { type: 'IS_ADMIN' };
}

export function addFilmInfoById(state) {
  return { type: 'ADD_FILM_INFO_BY_ID', film: state };
}

export function isUser() {
  return { type: 'IS_USER' };
}
