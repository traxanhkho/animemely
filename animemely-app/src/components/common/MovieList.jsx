import React from "react";
import Pagination from "./Pagination";
import CardMovie from "./CardMovie" ; 
import Heading from "./Heading" ; 
import "../../style/movieList.css" ; 

function MovieList(props) {
  return (
    <div className="movie-list">
      <Heading name={props.heading} />
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
