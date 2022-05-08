import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimeContext from "../../context/AnimeContext";
import CommentBox from "./CommentBox";
import "../../style/comment.css";

function Comment({ movieId }) {
  const { getData, currentUser } = useContext(AnimeContext);
  const [comment, setComment] = useState([]);

  useEffect(() =>{
    const getDataFromApi = async () =>{
      // const data = await getData("")
    } ; 

    getDataFromApi() ; 
  },[])

  return (
    <div className="comment">
      <h2>Bình luận ({comment.length})</h2>
      {!currentUser && (
        <Link to="/login" className="button-link">
          Đăng nhập để bình luận
        </Link>
      )}
      {currentUser && <CommentBox />}
      <div className="comment-container">
        {comment.map((item) => (
          <div key={item.id} className="comment-item">
            <div className="image-avt">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/anime-hay-8c35a.appspot.com/o/avatar-user.png?alt=media&token=a0adfa82-f118-4dfd-9ee7-92d5fee24ec7"
                alt="avatar-image"
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
