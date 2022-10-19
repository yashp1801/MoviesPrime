import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./Context";
import "./SingleMovie.scss";

const SingleMovie = () => {
  const [isLoading, setIsLoading, isError, setIsError] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let searchTimer = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500);
    return () => clearTimeout(searchTimer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="singlemovie">
        <div className="loading">Loading...</div>{" "}
      </div>
    );
  }

  return (
    <div className="singlemovie">
      <div className="container">
        <div className="image">
          <img src={movies.Poster} alt="" />
        </div>
        <div className="content">
          <h1 className="title">{movies.Title}</h1>
          <h1>Release : {movies.Year}</h1>
          <h1>Genre : {movies.Genre}</h1>
          <h1>director : {movies.Director}</h1>
          <h1>actors : {movies.Actors}</h1>
          <h1>duration : {movies.Runtime}</h1>
          <h1 className="imdb">imdb : {movies.imdbRating}</h1>
          <p> Overview : {movies.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
