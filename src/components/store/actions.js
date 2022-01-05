export function addPostersToStore(state) {
  return { type: 'ADD_DATA_TO_STORE', posters: state };
}

export function isAdmin() {
  return { type: 'IS_ADMIN' };
}

export function isUser() {
  return { type: 'IS_USER' };
}
