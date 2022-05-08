import React, { useState } from "react";
import Pagination from "./Pagination";
import CardMovie from "./CardMovie";
import Heading from "./Heading";
import _ from "lodash";
import Loading from "../Loading";
import { paginate } from "../../utils/paginate";
import "../../style/movieList.css";

function MovieList({ heading, movies }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const getPagedData = () => {
    return paginate(movies, currentPage, pageSize);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const allMovies = getPagedData();

  if (movies.length === 0) {
    return <Loading />
  }

  return (
    <div className="movie-list">
      <Heading name={heading} />
      <div className="container">
        {allMovies.map((movie) => (
          <CardMovie key={movie._id} movie={movie} />
        ))}
      </div>
      <Pagination
        itemsCount={movies.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default MovieList;
