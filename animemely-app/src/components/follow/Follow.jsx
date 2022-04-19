import React, { useContext, useEffect, useState } from "react";
import MovieList from "../common/MovieList";
import MovieContext from "../../context/movieContext";
import { getFollowed } from "../../services/fakeUserService";

function Follow() {
  const { currentUser } = useContext(MovieContext);
  const [follow, setfollow] = useState([]);
  
  useEffect(() => {
    const follow = getFollowed(currentUser);
    setfollow(follow);
  }, []);

  return (
    <div className="follow-section">
      <MovieList heading="phim bạn theo dõi" movies={follow} />
    </div>
  );
}

export default Follow;
