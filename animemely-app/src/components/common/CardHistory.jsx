import React from 'react';
import "../../style/cardHistory.css" ; 

function CardHistory({movie}) {
    return (
        <div className='card-history'>
            <div className='card-image'>
                <img src={movie.posters} alt="" />
            </div>
            <div className="card-content">
                <p>{movie.movie_name}</p>
                <span>bạn đã xem.</span>
            </div>
        </div>
    );
}

export default CardHistory; 