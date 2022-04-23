import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListEpisode from "../common/ListEpisode";
import Comment from "../common/Comment";
import "../../style/watchingMovie.css";
import { getEpisode, getMovie } from "../../services/fakeMovieService";

function WatchingMovie() {
  const { movieId, episodeId } = useParams();
  const [movie, setMovie] = useState({});
  const [list, setList] = useState([]);
  const [episode, setEpisode] = useState({});

  useEffect(() => {
    const movie = getMovie(movieId);
    const episode = getEpisode(movie, episodeId);
    setEpisode(episode);
    setMovie(movie);
    setList(movie.list_episode);
  }, [episodeId]);

  return (
    <div className="watching-movie">
      <div className="watching-status">
        <h2>{movie.movie_name}</h2>
        <h4>Đang xem tập {episode.index}</h4>
      </div>
      <div className="watching-video">
        <video src={episode.path} controls />
      </div>
      <ListEpisode list={list} movie={movie} />
      <Comment id={movieId}/>
    </div>
  );
}

export default WatchingMovie;
