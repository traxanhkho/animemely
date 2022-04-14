import React from 'react';
import "../../style/comment.css"  ; 

function Comment(props) {
    return (
        <div className='comment'>
            <h2>Bình luận (16)</h2>
            <button>Đăng nhập để bình luận</button>
            <div className="comment-container">
                <div className="comment-item">
                    <img src="..." alt="" />
                    <div className="comment-content">
                        <h5>Nobikachi</h5>
                        <p>bộ này hay nè :3</p>
                    </div>
                </div>
                <div className="comment-item">
                    <img src="..." alt="" />
                    <div className="comment-content">
                        <h5>Nobikachi</h5>
                        <p>bộ này hay nè :3</p>
                    </div>
                </div>
                <div className="comment-item">
                    <img src="..." alt="" />
                    <div className="comment-content">
                        <h5>Nobikachi</h5>
                        <p>bộ này hay nè :3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;