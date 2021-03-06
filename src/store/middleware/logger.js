import { createMiddleware } from './helpers';

function logger(store, action, next) {
  console.group(action.type);
    console.log('The Action:', action);
    const returnValue = next(action);
    console.log('The new state:', store.getState());
  console.groupEnd();

  return returnValue;
}

export default createMiddleware(logger);
