import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import CategoryMenu from "./CategoryMenu";

function Header(props) {
  return (
    <div className="header-section">
      <Link to="/" className="header-logo">ANIME-logo</Link>
      <form className="header-form">
        <input type="search" placeholder="search..." />
        <button >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <div className="header-list">
        <a className="fa fa-bars" aria-hidden="true"></a>
        <Link to="/history" className="fa fa-history" aria-hidden="true"></Link>
        <Link to="/follow" className="fa fa-bookmark" aria-hidden="true"></Link>
        <Link to="/login" className="fa fa-user" aria-hidden="true"></Link>
      </div>
      {/* <CategoryMenu /> */}
    </div>
  );
}

export default Header;
