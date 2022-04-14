import React from "react";
import "../../style/comment.css";

function Comment(props) {
  return (
    <div className="comment">
      <h2>Bình luận (16)</h2>
      <button>Đăng nhập để bình luận</button>
      <div className="comment-container">
        <div className="comment-item">
          <div className="image-avt">
            <img
              src="https://animehay.club/upload/avatar/13264.jpg?t=1633863975"
              alt=""
            />
          </div>
          <div className="comment-content">
            <h5>Nobikachi</h5>
            <p>bộ này hay nè :3</p>
          </div>
        </div>
        <div className="comment-item">
          <div className="image-avt">
            <img
              src="https://animehay.club/upload/avatar/24370.jpg?t=1642395012"
              alt=""
            />
          </div>
          <div className="comment-content">
            <h5>Nobikachi</h5>
            <p>
              bộ này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ
              này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ
              này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ
              này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ
              này hay nè :3bộ này hay nè :3bộ này hay nè :3bộ này hay nè :3
            </p>
          </div>
        </div>
        <div className="comment-item">
          <div className="image-avt">
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14Gg73b2p5ZeuTr4KjSZHGBeWxvsTRfgjyo3J4qJxIQ=s96-c"
              alt=""
            />
          </div>
          <div className="comment-content">
            <h5>Nobikachi</h5>
            <p>bộ này hay nè :3</p>
          </div>
        </div>
        <button className="more-comment">Xem thêm bình luận</button>
      </div>
    </div>
  );
}

export default Comment;
