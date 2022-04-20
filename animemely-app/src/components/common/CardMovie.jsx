import React from "react";
import { Link } from "react-router-dom";
import "../../style/cardMovie.css";

function CardMovie({ movie }) {
  return (
    <Link to={`/info-movie/${movie._id}`} style={{textDecoration:"none"}}>
      <div className="card-movie">
        <img src={movie.posters} alt="" />
        <h4>{movie.movie_name}</h4>
        <div className="episode-latest">
          <span>{movie.list_episode.length}/{movie.list_episode.length}</span>
        </div>
        <div className="score">
          <span>{movie.starRatingMovie}</span>
        </div>
      </div >
    </Link>

  );
}

export default CardMovie;
