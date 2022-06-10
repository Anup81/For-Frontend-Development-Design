import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi
      .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error :", err);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },

  extraReducers: {
    [fetchAsyncMovies.pending]: () => console.log("Pending"),
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
