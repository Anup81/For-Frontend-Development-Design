import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
// import movieApi from "../../common/apis/MovieApi";
// import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchMovies = async () => {
    // const response = await movieApi
    //   .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    //   .catch((err) => {
    //     console.log("Error :", err);
    //   });
    // dispatch(addMovies(response.data));
    // console.log("The response from API", response);
    // };

    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
