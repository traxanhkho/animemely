import React, { useContext, useEffect, useState } from "react";
import MovieList from "../common/MovieList";
import AnimeContext from "../../context/AnimeContext";
import "../../style/follow.css";

function Follow() {
  const { currentUser, getData } = useContext(AnimeContext);
  const [follow, setfollow] = useState([]);

  useEffect(() => {
    const getDataFromApi = async () => {
      if (currentUser) {
        const data = await getData("/Followed");
        const movies = await getData("/Movies");
        const listMovie = [] ; 
        const follow = data.find(h => h.email === currentUser.email) ; 
        if (follow) {
          for (let val of follow.movieId) {
            for (let movie of movies) {
              if(movie._id === val ) listMovie.push(movie) ; 
            }
          }
        }

        setfollow(listMovie);
      }
    }
    getDataFromApi();
  }, []);

  if (!currentUser) {
    return (
      <div className="follow-section">
        <h2>Vui lòng đăng nhập để xem danh sách phim đã theo dõi.</h2>
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
