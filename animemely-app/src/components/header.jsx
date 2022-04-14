import React from "react";
import "../style/header.css";
import CategoryMenu from "./CategoryMenu";

function Header(props) {
  return (
    <div className="header-section">
      <div className="header-logo">ANIME-logo</div>
      <form className="header-form">
        <input type="search" placeholder="search..." />
        <button >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <div className="header-list">
        <a className="fa fa-bars" aria-hidden="true"></a>
        <a className="fa fa-history" aria-hidden="true"></a>
        <a className="fa fa-bookmark" aria-hidden="true"></a>
        <a className="fa fa-user" aria-hidden="true"></a>
      </div>
      <CategoryMenu />
    </div>
  );
}

export default Header;
