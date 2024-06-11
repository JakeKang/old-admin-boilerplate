import {
  configureStore,
  combineReducers, // redux의 그것과 같다.
} from '@reduxjs/toolkit';

import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import sessionStorage from 'redux-persist/es/storage/session';

import { persistReducer } from 'redux-persist';
import { reducer as userReducer } from 'features/user/slice';
export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [routerMiddleware(history)],
  });

  return store;
};
