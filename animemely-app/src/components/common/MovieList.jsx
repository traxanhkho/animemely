import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import CardMovie from "./CardMovie";
import Heading from "./Heading";
import _ from "lodash";
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
    return (
      <div className="movie-list">
        <Heading name={heading} />
        <h2>Cảm ơn bạn , chưa có bộ nào trong danh sách.</h2>
      </div>
    );
  }

  return (
    <div className="movie-list">
      <Heading name={heading} />
      <div className="container">
        {allMovies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
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
