import React, { useContext, useEffect, useState } from 'react';
import AnimeContext from "../../context/AnimeContext"
import MovieList from '../common/MovieList';
import Slide from './Slide';


function Home() {
    const { getMovies } = useContext(AnimeContext) ; 
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const movies = await getMovies();
            setMovies(movies)  ; 
        }
        getData() ; 
    }, [])

    return (
        <div className='home-section'>
            <Slide />
            <MovieList heading="mới cập nhật" movies={movies} />
        </div>
    );
}

export default Home;