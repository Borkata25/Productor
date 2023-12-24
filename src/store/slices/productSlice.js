import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchAll: (state, action) => {
      return action.payload;

    },
    productAdd: (state, action) => {
      return action.payload;
    },
    productEdit: (state, action) => {
      return initialState;
    },
    productDelete: (state, action) => {
      return state.filter(productItem => productItem.id !== action.payload)
    },
  }
})

export const { fetchAll, productAdd, productEdit, productDelete } = productSlice.actions;

export default productSlice.reducer;