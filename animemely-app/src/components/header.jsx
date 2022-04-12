import React from "react";
import "../style/header.css" ; 

function Header(props) {
  return (
   <div className="header-section">
     <div className="header-logo">
       anime-Meww
     </div>
     <form>
       <input type="search" placeholder="search..." />
       <button className="header-submit">Search</button>
     </form>
     <div className="header-list">
       <i>The loai</i>
       <i>Lich su</i>
       <i>bookmark</i>
       <i>Login</i>
     </div>
   </div>
  );
}

export default Header;
