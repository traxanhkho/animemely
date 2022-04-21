import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../services/fakeMovieService";
import "../../style/searchBoxLink.css";

function SearchBoxLink({ searchQuery }) {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const movies = getMovies();
    if (searchQuery) {
      const filtered = movies.filter((m) =>
        m.movie_name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

      setFilter(filtered);
    }
  }, []);

  return (
    <div className="box-search">
      {filter.map((item) => (
        <Link key={item.id} to={`/info-movie/${item._id}`} className="search-link">
          {item.movie_name}
        </Link>
      ))}
    </div>
  );
}

export default SearchBoxLink;
