import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import "../style/header.css";

function Header() {
  const [active,setActive] = useState(false) ; 

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
        <a className="fa fa-bars" onClick={() => setActive(!active)} aria-hidden="true"></a>
        <Link to="/history" className="fa fa-history" aria-hidden="true"></Link>
        <Link to="/follow" className="fa fa-bookmark" aria-hidden="true"></Link>
        <Link to="/login" className="fa fa-user" aria-hidden="true"></Link>
      </div>
      <CategoryMenu active={active} />
    </div>
  );
}

export default Header;
