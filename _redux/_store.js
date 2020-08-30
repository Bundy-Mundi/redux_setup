import _rootReducer from "./_root";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const persistConfig = {
  key: '_root',
  storage,
  whitelist: ['user'], //Things u want to persist
  blacklist: [], //Things u dont
};

const persistedReducer = persistReducer(persistConfig, _rootReducer);

export default (preloadedState) => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
    preloadedState,
  });
  let persistor = persistStore(store)
  return { store, persistor }
}