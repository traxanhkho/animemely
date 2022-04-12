import React from "react";
import "../../style/cardMovie.css"

function CardMovie(props) {
  return (
    <div className="card-movie">
      <img src={props.urlImg} alt="" />
      <h4>Monsters vs Demons</h4>
      <div className="episode-latest">
        <span>9/10</span>
      </div>
      <div className="score">
          <span>9.1</span>
      </div>
    </div>
  );
}

export default CardMovie;
