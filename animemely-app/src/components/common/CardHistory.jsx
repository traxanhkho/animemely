import React from 'react';
import "../../style/cardHistory.css" ; 

function CardHistory(props) {
    return (
        <div className='card-history'>
            <div className='card-image'>
                <img src={props.url} alt="" />
            </div>
            <div className="card-content">
                <p>this is a movie name.</p>
                <span>bạn đã xem tập 1</span>
            </div>
        </div>
    );
}

export default CardHistory; 