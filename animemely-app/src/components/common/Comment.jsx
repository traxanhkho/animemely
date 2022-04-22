import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComment } from "../../services/fakeCommentService";
import "../../style/comment.css";
import CommentBox from "./CommentBox";

function Comment({ id }) {
  const [comment, setComment] = useState(getComment(id));

  return (
    <div className="comment">
      <h2>Bình luận ({comment.length})</h2>
      {/* <Link to="/login" className="button-link">
        Đăng nhập để bình luận
      </Link> */}
      <CommentBox />
      <div className="comment-container">
        {comment.map((item) => (
          <div key={item.id} className="comment-item">
            <div className="image-avt">
              <img
                src="https://animehay.club/upload/avatar/13264.jpg?t=1633863975"
                alt=""
              />
            </div>
            <div className="comment-content">
              <h5>{item.name}</h5>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
