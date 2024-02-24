import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../api/postsApi";

// const api = postsApi.reducerPath;

const rootReducer = combineReducers ({
    apiPosts: postsApi.reducer,
})

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});