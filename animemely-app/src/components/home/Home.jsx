import React,  { useEffect, useState } from 'react';
import MovieList from '../common/MovieList';
import Slide from './Slide';
import { getMovies } from "../../services/fakeMovieService";


function Home(props) {
    const [movies, setMovie] = useState(getMovies());
    

    return (
        <div className='home-section'>
            {/* <Slide /> */}
            <MovieList heading="mới cập nhật" movies={movies} />
        </div>
    );
}

export default Home;