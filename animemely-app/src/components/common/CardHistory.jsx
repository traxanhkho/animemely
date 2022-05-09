import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/cardHistory.css" ; 

function CardHistory({movie}) {
    return (
        <Link to={`/info-movie/${movie._id}`} className='card-history'>
            <div className='card-image'>
                <img src={movie.poster} alt="" />
            </div>
            <div className="card-content">
                <p>{movie.title}</p>
                <span>bạn đã xem.</span>
            </div>
        </Link>
    );
}

export default CardHistory; 