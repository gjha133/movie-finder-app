import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import MovieCard from './MovieCard.component'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const MovieList = () => {
    const { movies } = useContext(AppContext) 
    return (
        <div className='movieCards-container'>
            {
                movies.map(movie => 
                    <LazyLoadComponent key={movie.id}>
                        <MovieCard movie={movie} key={movie.id}/>
                    </LazyLoadComponent>
                )
            }
        </div>
    )
}

export default MovieList