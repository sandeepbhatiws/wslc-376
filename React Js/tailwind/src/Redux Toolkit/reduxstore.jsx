import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart'

export const reduxstore = configureStore({
  reducer: {
    cart : cartSlice
  },
})