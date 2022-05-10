import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading"; 
import "../../style/listEpisode.css";

function ListEpisode({ list, movie }) {
  if(list.length === 0){
    return <Loading />
  }

  return (
    <div className="list-episode">
      <h4>Danh sách tập</h4>
      <div className="container-box">
        {list.map((item, index) => (
          <Link key={index} to={`/watching-movie/${movie._id}/${index}`}>
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListEpisode;
