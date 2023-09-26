import { createReducer } from "@reduxjs/toolkit";
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
} from "./../actions/user";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(loadUserSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(loadUserFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });
});
