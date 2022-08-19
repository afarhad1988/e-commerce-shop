import { createSlice } from '@reduxjs/toolkit'

const catalogInitialState = {
  products: [],
}
const catalogSlice = createSlice({
  name: 'catalog',
  initialState: catalogInitialState,
  reducers: {
    getCatalogs: (state, action) => {
      state.products = action.payload
    },
  },
})
export const { getCatalogs } = catalogSlice.actions
export default catalogSlice.reducer
