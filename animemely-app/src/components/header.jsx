import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./common/SearchBox";
import SearchBoxLink from "./common/SearchBoxLink";
import "../style/header.css";
import MovieContext from "../context/movieContext";
import { getUser } from "../services/fakeUserService";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser } = useContext(MovieContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = getUser(currentUser);
    setUsername(user.name);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="header-section">
      <Link to="/" className="header-logo">
        ANIME-logo
      </Link>
      <form className="header-form">
        <SearchBox value={searchQuery} onChange={handleSearch} />
        {searchQuery && <SearchBoxLink searchQuery={searchQuery} />}
      </form>
      <div className="header-list">
        <Link to="/history" className="fa fa-history" aria-hidden="true"></Link>
        <Link to="/follow" className="fa fa-bookmark" aria-hidden="true"></Link>
        {!currentUser && (
          <Link to="/login" className="fa fa-user" aria-hidden="true"></Link>
        )}
        {currentUser && (
          <React.Fragment>
            <span>{username}</span>
            <Link to="/logout">Logout</Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Header;
