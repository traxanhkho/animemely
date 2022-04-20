import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../common/Comment";
import Info from "../common/Info";
import ListEpisode from "../common/ListEpisode";
import { getMovie } from "../../services/fakeMovieService";
import "../../style/infoMovie.css";

function InfoMovie() {
  const [movie,setMovie] = useState({}) ;
  const [list,setList] = useState([]) ;  
  const params = useParams() ; 

  useEffect(() => {
    const movieId = params.id ; 
    const movie = getMovie(movieId) ;
    setMovie(movie) ; 
    setList(movie.list_episode)   ;  
  }, [])

  return (
    <div className="info-movie">
      <h1>{movie.movie_name}</h1>
      <div className="info-container">
        <div className="info-image">
          <img src={movie.posters} alt="" />
        </div>
        <ul className="info-list">
          {Info.renderItem("Thể loại",movie.genre_name)}
          {Info.renderItem("Trạng thái", movie.status)}
          {Info.renderItem("Đánh giá", movie.starRatingMovie)}
          {Info.renderItem("Phát hành", movie.release_year)}
        </ul>
      </div>
      <div className="info-nav">
        <button className="i-play">
          <i class="fa fa-play" aria-hidden="true"></i>
        </button>
        <button className="i-bookmark">
          <i class="fa fa-bookmark" aria-hidden="true"></i>
        </button>
        <button className="i-star">
          <i class="fa fa-star" aria-hidden="true"></i>
        </button>
      </div>
      <ListEpisode list={list} movie={movie}/>
      <div className="info-content">
        <h4>Nội dung</h4>
        <p>
         {movie.content}
        </p>
      </div>
    </div>
  );
}

export default InfoMovie;
