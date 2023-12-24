import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  firstName: '',
  lastName: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      return action.payload;
    },
    login: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return initialState;
    },
  }
})

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;