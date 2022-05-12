import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimeContext from "../../context/AnimeContext";
import { getMovies } from "../../services/fakeMovieService";
import "../../style/searchBoxLink.css";

function SearchBoxLink({ searchQuery }) {
  const [filter, setFilter] = useState([]);
  const { getData } = useContext(AnimeContext) ; 

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const data = await getData("/Movies") ; 
        if (searchQuery) {
          const filtered = data.filter((m) =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          );
          console.log(searchQuery,filtered, data)
          setFilter(filtered);
        }
      } catch (error) {
        console.log(error) ; 
      }
    }
    handleSearch() ; 
  }, []);

  return (
    <div className="box-search">
      {filter.map((item) => (
        <a
          key={item._id}
          href={`/info-movie/${item._id}`}
          className="search-link"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default SearchBoxLink;
