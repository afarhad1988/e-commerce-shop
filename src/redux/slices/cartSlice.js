import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      let included = false
      const cart = []
      state.cart.forEach((product) => {
        if (product.id === action.payload.id) {
          included = true
          product.amount += 1
        }
      })
      if (!included) {
        state.cart = [...state.cart, action.payload]
      }
      state.totalAmount += 1
      // state.totalPrice = state.cart.reduce(
      //   (acc, item) => acc + item.price * item.amount,
      //   0
      // );
      localStorage.setItem('cart', JSON.stringify(cart))
    },

    increase: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      item.amount += 1
      state.totalAmount += 1
    },
    decrease: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item.amount > 1) {
        item.amount -= 1
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload)
      }
      state.totalAmount -= 1
    },
    removeFromCart: (state, action) => {
      let cart
      const item = state.cart.find((item) => item.id === action.payload)
      state.cart = state.cart.filter((item) => item.id !== action.payload)
      state.totalAmount -= item.amount
      localStorage.setItem('cart', JSON.stringify(cart))
    },
    calculateTotal: (state) => {
      state.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.price * item.amount,
        0,
      )
    },
  },
})
export const { addToCart, removeFromCart, decrease, increase, calculateTotal } =
  cartSlice.actions
export default cartSlice.reducer
