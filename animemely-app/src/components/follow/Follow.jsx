import React, { useContext, useEffect, useState } from "react";
import MovieList from "../common/MovieList";
import MovieContext from "../../context/movieContext";
import { getFollowed } from "../../services/fakeUserService";
import "../../style/follow.css" ; 

function Follow() {
  const { currentUser } = useContext(MovieContext);
  const [follow, setfollow] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const follow = getFollowed(currentUser);
      setfollow(follow);
    }
  }, []);

  if (!currentUser) {
    return (
      <div className="follow-section">
        <h2>Vui lòng đăng nhập để xem phim đã theo dõi.</h2>
      </div>
    );
  }

  return (
    <div className="follow-section">
      <MovieList heading="phim bạn theo dõi" movies={follow} />
    </div>
  );
}

export default Follow;
