import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, name: "Product1", quantity: 5, unit: "count", addDate: "13.05.2023", expDate: "13.12.2023" }, { id: 2, name: "Product2", quantity: 5, unit: "count", addDate: "13.05.2023", expDate: "13.12.2023" }]

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
      return initialState;
    },
  }
})

export const { fetchAll, productAdd, productEdit, productDelete } = productSlice.actions;

export default productSlice.reducer;