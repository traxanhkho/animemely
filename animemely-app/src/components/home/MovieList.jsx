import React from "react";
import Pagination from "../common/Pagination";

function MovieList(props) {
  return (
    <React.Fragment>
      <div className="movie-list">
        <div className="movie-item">
          <img src="..." alt="anime-image" />
          <h2>movie name</h2>
          <span className="episode-latest">8/10</span>
          <span className="movie-rate">9.9</span>
        </div>
        <div className="movie-item">
          <img src="..." alt="anime-image" />
          <h2>movie name</h2>
          <span className="episode-latest">8/10</span>
          <span className="movie-rate">9.9</span>
        </div>
        <div className="movie-item">
          <img src="..." alt="anime-image" />
          <h2>movie name</h2>
          <span className="episode-latest">8/10</span>
          <span className="movie-rate">9.9</span>
        </div>
      </div>
      <Pagination />
    </React.Fragment>
  );
}

export default MovieList;
