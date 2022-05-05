import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./common/SearchBox";
import SearchBoxLink from "./common/SearchBoxLink";
import MovieContext from "../context/movieContext";
import AuthContext from "../context/AuthContext";
import "../style/header.css";
import { toast } from "react-toastify";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser, logout } = useContext(AuthContext);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLogout = async () => {
    try {
      await logout();
      window.location = "/";
      window.location.reload();
    } catch (error) {
      toast.error("Đã xảy ra lỗi bên phía back-end");
    }
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
            <a
              onClick={handleLogout}
              class="fa fa-sign-out"
              aria-hidden="true"
            ></a>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Header;
