import React from "react";
import { Link } from "react-router-dom" ; 
import "../style/footer.css" ; 

function Footer() {
  return (
    <div className="footer">
      <Link to="/" href="#">Anime-Logo</Link>
      <div className="list-social">
        <a href="https://www.facebook.com/" class="fa fa-facebook" aria-hidden="true"></a>
        <a href="https://twitter.com/?lang=vi" class="fa fa-twitter" aria-hidden="true"></a>
        <a href="https://www.skype.com/en/" class="fa fa-skype" aria-hidden="true"></a>
      </div>
    </div>
  );
}

export default Footer;
