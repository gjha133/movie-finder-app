import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import MovieCard from './MovieCard.component'

const MovieList = () => {
    const { movies } = useContext(AppContext) 
    return (
        <div className='movieCards-container'>
            {
                movies.map(movie => 
                    <MovieCard movie={movie} key={movie.id} />
                )
            }
        </div>
    )
}

export default MovieList