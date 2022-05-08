import React from "react";
import { Link } from "react-router-dom";
import "../../style/cardMovie.css";

function CardMovie({ movie }) {
  return (
    <Link to={`/info-movie/${movie._id}`} style={{textDecoration:"none"}}>
      <div className="card-movie">
        <img src={movie.poster} alt="" />
        <div className="episode-latest">
          <span>{movie.numberInStock} Tập</span>
        </div>
        <h4>{movie.title}</h4>
        <div className="score">
          <span>{movie.starRating}</span>
        </div>
      </div >
    </Link>

  );
}

export default CardMovie;
