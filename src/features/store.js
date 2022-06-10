import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: { movies: moviesReducer },
});
