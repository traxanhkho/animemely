import React, { useEffect, useState , useContext} from "react";
import { useParams } from "react-router-dom";
import AnimeContext from "../../context/AnimeContext";
import ListEpisode from "../common/ListEpisode";
import Comment from "../common/Comment";
import "../../style/watchingMovie.css";
import Loading from "../Loading";

function WatchingMovie() {
  const { getData, currentUser } = useContext(AnimeContext);
  const { movieId , episodeId } = useParams();
  const [movie, setMovie] = useState({});
  const [list, setList] = useState([]);
  const [episode, setEpisode] = useState("");

  useEffect(() => {
    const id = movieId ;
    const getDataFromApi = async () => {
      try {
        const data = await getData("Movies/");
        const movie = data.find(m => m._id === id);
        setMovie(movie);
        setList(movie.episodes);
        const episode = movie.episodes ;
        setEpisode(episode[episodeId]) ; 
      } catch (error) {
        alert(error);
      }
    }

    getDataFromApi();
  }, [episodeId]);

  return (
    // <Loading />
    <div className="watching-movie">
      <div className="watching-status">
        <h2>{movie.title}</h2>
        <h4>Đang xem tập {parseInt(episodeId) + 1}</h4>
      </div>
      <div className="watching-video">
        <video src={episode} controls />
      </div>
      <ListEpisode list={list} movie={movie} />
      <Comment movieId={movieId}/>
    </div>
  );
}

export default WatchingMovie;
