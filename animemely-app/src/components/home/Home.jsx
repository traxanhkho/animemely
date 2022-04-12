import React from 'react';
import MovieList from './MovieList';
import Slide from './Slide';

function Home(props) {
    return (
        <React.Fragment>
            <Slide />
            <MovieList />
        </React.Fragment>
    );
}

export default Home;