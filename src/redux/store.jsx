import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {contactSlice} from './contactSlise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persisstConfig = {
  key: 'root',
  storage: storage,
  whitelist:['items'],
}

const contactsPersistedReducer = persistReducer(
  persisstConfig,
  contactSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);