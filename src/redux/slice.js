import { createSlice } from '@reduxjs/toolkit';
import { register, login } from "./operations";

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
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

})




export const authReducer = authSlice.reducer;