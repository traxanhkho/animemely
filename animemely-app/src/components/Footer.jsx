import React from "react";
import { Link } from "react-router-dom" ; 
import "../style/footer.css" ; 

function Footer() {
  return (
    <div className="footer">
      <Link to="/" href="#">Anime-Logo</Link>
      <div className="list-social">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-skype" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Footer;
