import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: JSON.parse(localStorage.isAuth || false),
  email: JSON.parse(localStorage.email || null),
  password: JSON.parse(localStorage.password || null),
  name: JSON.parse(localStorage.name || null),
  surname: JSON.parse(localStorage.surname || null),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.isAuth = localStorage.isAuth = JSON.stringify(true);
      state.email = localStorage.email = JSON.stringify(action.payload.email);
      state.password = localStorage.password = JSON.stringify(
        action.payload.password
      );
      state.name = localStorage.name = JSON.stringify(action.payload.name);
      state.surname = localStorage.surname = JSON.stringify(
        action.payload.surname
      );
    },
    login: (state, action) => {
      if (
        state.email === action.payload.email &&
        state.password === action.payload.password
      ) {
        state.isAuth = localStorage.isAuth = JSON.stringify(true);
      } else {
        state.isAuth = localStorage.isAuth = false;
      }
    },
    logout: (state) => {
      state.isAuth = localStorage.isAuth = false;
    },
  },
});

export const { auth, logout, login } = authSlice.actions;

export const isAuth = (state) => state.auth.isAuth;
export const name = (state) => state.auth.name;
export const email = (state) => state.auth.email;
export const surname = (state) => state.auth.surname;

export default authSlice.reducer;
