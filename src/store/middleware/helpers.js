export function createMiddleware(func) {
  return (store) => (next) => (action) => {
      func(store, action, next);
  };
}
