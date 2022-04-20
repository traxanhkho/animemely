import React from "react";
import { Link } from "react-router-dom";
import "../../style/listEpisode.css" ; 

function ListEpisode({ list , movie }) {
  return (
    <div className="list-episode">
      <h4>Danh sách tập</h4>
      <div className="container-box">
        {list.map((item , index )=>(
          <Link to={`/watching-movie/${movie._id}/${item._id}`}>{index + 1}</Link>
        ))}
      </div>
    </div>
  );
}

export default ListEpisode;
