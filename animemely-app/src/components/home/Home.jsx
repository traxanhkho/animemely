import React from 'react';
import MovieList from '../common/MovieList';
import Slide from './Slide';

function Home(props) {
    return (
        <div className='home-section'>
            <Slide />
            <MovieList heading="mới cập nhật" />
        </div>
    );
}

export default Home;