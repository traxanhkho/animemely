import React from "react";
import Comment from "../common/Comment";
import Info from "../common/Info";
import ListEpisode from "../common/ListEpisode";
import "../../style/infoMovie.css";

function InfoMovie(props) {
  return (
    <div className="info-movie">
      <h1>Monster and beautiful girl.</h1>
      <div className="info-container">
        <div className="info-image">
          <img src="https://animehay.club/upload/poster/3078-1634943074.jpg" alt="" />
        </div>
        <ul className="info-list">
          {Info.renderItem("Thể loại", "Anime , Psychological , Drama")}
          {Info.renderItem("Trạng thái", "9/12")}
          {Info.renderItem("Đánh giá", "8.9 || 19 đánh giá")}
          {Info.renderItem("Phát hành", "2022")}
          {Info.renderItem("Thời lượng", "12 tập")}
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
      <ListEpisode />
      <div className="info-content">
        <h4>Nội dung</h4>
        <p>
          Mùa cuối cùng của Series Magia Record: Mahou Shoujo Madoka☆Magica
          Gaiden (TV). Mùa cuối cùng của Series Magia Record: Mahou Shoujo Madoka☆Magica
          Gaiden (TV). Mùa cuối cùng của Series Magia Record: Mahou Shoujo Madoka☆Magica
          Gaiden (TV). Mùa cuối cùng của Series Magia Record: Mahou Shoujo Madoka☆Magica
          Gaiden (TV). Mùa cuối cùng của Series Magia Record: Mahou Shoujo Madoka☆Magica
          Gaiden (TV). Mùa cuối cùng của Series Magia Record: Mahou Shoujo Madoka☆Magica
          Gaiden (TV).
        </p>
      </div>
      <Comment />
    </div>
  );
}

export default InfoMovie;
