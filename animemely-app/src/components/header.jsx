import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SearchBox from "./common/SearchBox";
import SearchBoxLink from "./common/SearchBoxLink";
import AnimeContext from "../context/AnimeContext";
import "../style/header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser, logout, getData } = useContext(AnimeContext);
  const [nickname, setNickname] = useState("?nickname?");
  const [show,setShow] = useState({}); 

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

  useEffect(() => {
    const getNickname = async () => {
      try {
        const data = await getData("/Users");
        if (currentUser) {
          const user = data.find(item => item.email === currentUser.email);
          setNickname(user.nickname);
        }
      } catch (error) {
        alert(error)
      }
    }

    getNickname();
  }, [currentUser])

  const handleShowSearch = () =>{
    if(show.display === 'flex'){
      setShow({display : "none"})
    }else{
      setShow({display : "flex"})
    }
  }
  return (
    <div className="header-section">
      <Link to="/" className="header-logo">
        ANIME-logo
      </Link>
      <form className="header-form" style={show}>
        <SearchBox value={searchQuery} onChange={handleSearch} />
        {searchQuery && <SearchBoxLink searchQuery={searchQuery} />}
      </form>
      <div className="header-list">
        <a onClick={handleShowSearch} id="search-btn"  className="fa fa-search" aria-hidden="true"></a>
        <Link to="/history" className="fa fa-history" aria-hidden="true"></Link>
        <Link to="/follow" className="fa fa-bookmark" aria-hidden="true"></Link>
        {!currentUser && (
          <Link to="/login" className="fa fa-user" aria-hidden="true"></Link>
        )}
        {currentUser && (
          <React.Fragment>
            <span>{nickname}</span>
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
