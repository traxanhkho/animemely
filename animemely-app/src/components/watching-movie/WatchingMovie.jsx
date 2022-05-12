import React, { useEffect, useState, useContext } from "react";
import { useLocation , useParams } from "react-router-dom";
import AnimeContext from "../../context/AnimeContext";
import ListEpisode from "../common/ListEpisode";
import Comment from "../common/Comment";
import "../../style/watchingMovie.css";

function WatchingMovie() {
  const { getData, currentUser, insertData, getUser } =
    useContext(AnimeContext);
  const { movieId, episodeId } = useParams();
  const [movie, setMovie] = useState({});
  const [list, setList] = useState([]);
  const [episode, setEpisode] = useState("");
  const location = useLocation() ; 

  useEffect(() => {
    const id = movieId;
    const getDataFromApi = async () => {
      try {
        const data = await getData("Movies/");
        const movie = data.find((m) => m._id === id);
        setMovie(movie);
        setList(movie.episodes);
        const episode = movie.episodes;
        setEpisode(episode[episodeId]);
        // insert history in server .
        if (currentUser) {
          let historyId = "";
          let newList = null;
          try {
            const user = await getUser(currentUser.email);
            const data = await getData("/Historys");
            const history = data.find((i) => i.email === user.email);
            // add history if not defiend . 
            if (history === undefined) {
              if (historyId.length === 0) historyId = Date.now().toString();
              const list = [id] ; 
              const data = {
                history_id: historyId,
                email: currentUser.email,
                movieId: list,
              };
              try {
                await insertData("Historys/", historyId, data);
                historyId = "";
              } catch (error) {
                console.log(error);
              }
            } else {
              const listMovieId = history.movieId;
              historyId = history.history_id;
              if (listMovieId.length === 0) {
                listMovieId.push(movieId);
                newList = listMovieId;
              } else {
                let check = false;
                listMovieId.forEach((id) => {
                  if (id === movieId) check = true;
                });
                if (!check) listMovieId.push(movieId);
                newList = listMovieId;
              }
            }
          } catch (error) {
            console.log(error);
          }
          if (historyId.length === 0) historyId = Date.now().toString();
          // handle add history
          if (newList) {
            const data = {
              history_id: historyId,
              email: currentUser.email,
              movieId: newList,
            };
            try {
              await insertData("Historys/", historyId, data);
            } catch (error) {
              console.log(error);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getDataFromApi();
  }, [episodeId]);

  return (
    <div className="watching-movie">
      <div className="watching-status">
        <h2>{movie.title}</h2>
        <h4>Đang xem tập {parseInt(episodeId) + 1}</h4>
      </div>
      <div className="watching-video">
        <video src={episode} controls />
      </div>
      <ListEpisode list={list} movie={movie} />
      <Comment location={location} movieId={movieId} />
    </div>
  );
}

export default WatchingMovie;
