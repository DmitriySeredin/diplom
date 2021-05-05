import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: JSON.parse(localStorage.isAuth || false),
  email: localStorage.email || null,
  password: localStorage.password || null,
  name: localStorage.name || null,
  surname: localStorage.surname || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.isAuth = Boolean((localStorage.isAuth = "true"));
      state.email = localStorage.email = action.payload.email;
      state.password = localStorage.password = action.payload.password;
      state.name = localStorage.name = action.payload.name;
      state.surname = localStorage.surname = action.payload.surname;
    },
    login: (state, action) => {
      if (
        state.email === action.payload.email &&
        state.password === action.payload.password
      ) {
        state.isAuth = Boolean((localStorage.isAuth = "true"));
      } else {
        state.isAuth = localStorage.isAuth = false;
      }
    },
    logout: (state) => {
      state.isAuth = localStorage.isAuth = false;
    },
  },
});
const a = 10;
export const { auth, logout, login } = authSlice.actions;

export const isAuth = (state) => state.auth.isAuth;
export const name = (state) => state.auth.name;
export const email = (state) => state.auth.email;
export const surname = (state) => state.auth.surname;

export default authSlice.reducer;
