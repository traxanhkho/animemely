import React from "react";
import Pagination from "./Pagination";
import CardMovie from "./CardMovie";
import Heading from "./Heading";
import "../../style/movieList.css";

function MovieList({ heading, movies }) {

  return (
    <div className="movie-list">
      <Heading name={heading} />
      <div className="container">
        {movies.map(movie => (
          <CardMovie movie={movie}/>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default MovieList;
