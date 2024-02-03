import { configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { advertsReducer } from './advertsSlice'
import { favoritesReducer } from './favoritesSlice'
import { filterReducer } from './filterSlice'

const persistConfig = {
	key: 'favorites',
	storage,
	whitelist: ['favorites'],
}

const persistedReducer = persistReducer(persistConfig, favoritesReducer)

export const store = configureStore({
	reducer: {
		adverts: advertsReducer,
		favorites: persistedReducer,
		filter: filterReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
