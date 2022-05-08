import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContext from "../../context/AnimeContext";
import Info from "../common/Info";
import ListEpisode from "../common/ListEpisode";
import "../../style/infoMovie.css";

function InfoMovie() {
  const [movie, setMovie] = useState({});
  const [list, setList] = useState([]);
  const { getData } = useContext(AnimeContext);
  const params = useParams();

  useEffect(() => {
    const movieId = params._id;
    console.log(movieId);
    const getDataFromApi = async () => {
      try {
        const data = await getData("Movies/");
        console.log(data)
      } catch (error) {
        alert(error);
      }
    }

    getDataFromApi() ; 

  }, []);

  return (
    <h1>loading.....</h1>
    // <div className="info-movie">
    //   <h1>{movie.movie_name}</h1>
    //   <div className="info-container">
    //     <div className="info-image">
    //       <img src={movie.posters} alt="" />
    //     </div>
    //     <ul className="info-list">
    //       {Info.renderItem("Thể loại", movie.genre_name)}
    //       {Info.renderItem("Trạng thái", movie.status)}
    //       {Info.renderItem("Đánh giá", movie.starRatingMovie)}
    //       {Info.renderItem("Phát hành", movie.release_year)}
    //     </ul>
    //   </div>
    //   {currentUser && (
    //     <div className="info-nav">
    //       <button className="i-bookmark">
    //         <i class="fa fa-bookmark" aria-hidden="true"></i>
    //       </button>
    //       <button className="i-star">
    //         <i class="fa fa-star" aria-hidden="true"></i>
    //       </button>
    //     </div>
    //   )}
    //   <ListEpisode list={list} movie={movie} />
    //   <div className="info-content">
    //     <h4>Nội dung</h4>
    //     <p>{movie.content}</p>
    //   </div>
    // </div>
  );
}

export default InfoMovie;
