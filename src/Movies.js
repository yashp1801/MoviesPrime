import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
import "./Movies.scss";

const Movies = () => {
  const { movies } = useGlobalContext();

  return (
    <div className="movies">
      {movies.map((currMovie) => {
        const { imdbID, Title, Poster, Year, Type } = currMovie;
        const movieName = Title.substring(0, 15);

        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID} className="card">
            <div className="card__image">
              <img src={Poster} alt={imdbID} />
            </div>
            <div className="card__content__wrapper">
              <div className="card__content">
                <h2>
                  {movieName.length >= 15 ? `${movieName}...` : movieName}
                </h2>
                <h3>{Year}</h3>
              </div>
              <span>{Type}</span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Movies;
