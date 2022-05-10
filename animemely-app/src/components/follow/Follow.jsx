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
        const followeds = await getData("/Followed") ; 
        const movies = await getData("/Movies") ; 
        for(let val of followeds.movieId){
          for(let i of movies){
            if(val === i.)
          }
        }
        setfollow(follow);
      }
    }

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
