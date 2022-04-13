import React from "react";
import Pagination from "../common/Pagination";
import CardMovie from "../common/CardMovie" ; 
import Heading from "../common/Heading" ; 
import "../../style/movieList.css" ; 

function MovieList(props) {
  return (
    <div className="movie-list">
      <Heading name="Mới cập nhật" />
      <div className="container">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </div>
      <Pagination />
    </div>
  );
}

export default MovieList;
