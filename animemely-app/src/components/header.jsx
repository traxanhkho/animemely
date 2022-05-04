import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./common/SearchBox";
import SearchBoxLink from "./common/SearchBoxLink";
import MovieContext from "../context/movieContext";
import { useAuth } from "../context/AuthContext";
import "../style/header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser } = useAuth ; 

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
            <span>{currentUser.email}</span>
            <Link to="/logout"  class="fa fa-sign-out" aria-hidden="true"></Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Header;
