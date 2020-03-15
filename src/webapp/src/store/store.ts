import {Action, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';
import {persistReducer, persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, {IRootState} from './rootReducer';


const persistConfig = {
  key: 'full-stack',
  storage,
  whitelist: ['app']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        // fixme: https://github.com/rt2zz/redux-persist/issues/988
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

export type IDispatch = typeof store.dispatch;
export type IThunk = ThunkAction<void, IRootState, null, Action<string>>;
