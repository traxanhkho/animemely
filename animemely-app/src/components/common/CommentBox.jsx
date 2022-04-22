import React from "react";

function CommentBox() {
  return (
    <div className="comment-box">
      <textarea placeholder="Nhập bình luận bạn tại đây." id="comment-text" />
      <button>Bình luận</button>
    </div>
  );
}

export default CommentBox;
