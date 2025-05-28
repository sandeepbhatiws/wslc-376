import { createSlice } from '@reduxjs/toolkit'

var cartData = localStorage.getItem('cartItems');
var cartData = JSON.parse(cartData);


const initialState = {
  cartItems: cartData ?? [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer