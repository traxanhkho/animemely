import React from "react";
import Comment from "../common/Comment" ; 

function InfoMovie(props) {
  return (
    <div className="info-movie">
      <h1>Monster and beautiful girl.</h1>
      <div className="info-container">
        <img src="..." alt="" />
        <ul className="info-list">
          <li className="info-item">
            <h6>Thể loại</h6>
            <p>Anime , Psychological , Drama</p>
          </li>
          <li className="info-item">
            <h6>Trạng thái</h6>
            <p>9/12</p>
          </li>
          <li className="info-item">
            <h6>Đánh giá</h6>
            <p>8.9 || 19 đánh giá</p>
          </li>
          <li className="info-item">
            <h6>Phát hành</h6>
            <p>2022</p>
          </li>
          <li className="info-item">
            <h6>Thời lượng</h6>
            <p>12 tập</p>
          </li>
        </ul>
      </div>
      <div className="info-nav">
        <button>
          <i class="fa fa-play" aria-hidden="true"></i>
        </button>
        <button>
          <i class="fa fa-bookmark" aria-hidden="true"></i>
        </button>
        <button>
          <i class="fa fa-star" aria-hidden="true"></i>
        </button>
      </div>
      <div className="list-episode">
        <h4>Danh sách tập</h4>
        <div className="container-box">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
        </div>
      </div>
      <div className="info-content">
        <h4>Nội dung</h4>
        <p>
          Mùa cuối cùng của Series Magia Record: Mahou Shoujo Madoka☆Magica
          Gaiden (TV).
        </p>
      </div>
      <Comment />
    </div>
  );
}

export default InfoMovie;
