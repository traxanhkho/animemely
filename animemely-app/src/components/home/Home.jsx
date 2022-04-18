import React, { useContext } from 'react';
import MovieList from '../common/MovieList';
import MovieContext from "../../context/movieContext";
import Slide from './Slide';


function Home() {

  const { movies } = useContext(MovieContext) ; 

    return (
        <div className='home-section'>
            <Slide />
            <MovieList heading="mới cập nhật" movies={movies} />
        </div>
    );
}

export default Home;