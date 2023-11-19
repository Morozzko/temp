import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { reducersList } from './reducers'

const rootReducer = combineReducers(reducersList)

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch
