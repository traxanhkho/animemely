import React from 'react';
import MovieList from './MovieList';
import Slide from './Slide';

function Home(props) {
    return (
        <div className='home-section'>
            <Slide />
            {/* <MovieList /> */}
        </div>
    );
}

export default Home;