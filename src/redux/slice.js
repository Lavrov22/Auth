import { createSlice } from '@reduxjs/toolkit';
import { register, login, refreshing, logOut, googleSignIn } from "./operations";

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => builder
    .addCase(register.pending, (state, _) => {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.user = {
        email: action.payload.email,
        id: action.payload.id
      };
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(login.pending, (state, _) => {
      state.isLoading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = {
        email: action.payload.email,
        id: action.payload.id
      };
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(logOut.pending, (state, _) => {
      state.isLoading = true;
    })
    .addCase(logOut.fulfilled, (state, _) => {
      state.user = {};
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = null;
      state.isRefreshing = false;
    })
    .addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(refreshing.pending, (state, _) => {
      state.isRefreshing = true;
    })
    .addCase(refreshing.fulfilled, (state, action) => {
      state.user = {
        email: action.payload.email,
        id: action.payload.id
      };
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.isRefreshing = false;
      state.error = null;
      state.isLoading = false;
    })
    .addCase(refreshing.rejected, (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(googleSignIn.pending, (state, _) => {
      state.isRefreshing = true;
    })
    .addCase(googleSignIn.fulfilled, (state, action) => {
      state.user = {
        email: action.payload.email,
        id: action.payload.id
      };
      state.token = action.payload.token;
      // state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    })
    .addCase(googleSignIn.rejected, (state, action) => {
      state.isRefreshing = false;
      state.error = action.payload;
    })


})




export const authReducer = authSlice.reducer;