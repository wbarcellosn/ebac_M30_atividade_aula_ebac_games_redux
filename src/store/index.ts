import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

export const store = configureStore({
  //RootReducer
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
