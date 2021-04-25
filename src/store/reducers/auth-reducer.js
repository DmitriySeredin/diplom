import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: JSON.parse(localStorage.isAuth),
  email: null,
  password: null,
  name: null,
  surname: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.isAuth = localStorage.isAuth = JSON.stringify(true);
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
    },
  },
});

export const { auth } = authSlice.actions;

export const isAuth = (state) => state.auth.isAuth;

export default authSlice.reducer;
