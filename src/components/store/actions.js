export function increment() {
  return { type: 'INCREMENT' };
}

export function decrement() {
  return { type: 'DECREMENT' };
}

export function isAdmin() {
  return { type: 'IS_ADMIN' };
}

export function isUser() {
  return { type: 'IS_USER' };
}
