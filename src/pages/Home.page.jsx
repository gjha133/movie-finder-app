import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import MovieCard from '../components/MovieCard.component'
import Loading from '../components/Loading.component'
import Error from './Error.page'

const Home = () => {
    
    const { movies, isLoading, isError } = useContext(AppContext)
    console.log(isError.msg)
    return (
        <section>
            {
                isLoading ? <Loading/> 
                : 
                    <div className='movieCards-container'>
                        {
                            movies.map(movie => 
                                <MovieCard movie={movie} key={movie.id} />
                            )
                        }
                    </div>
            }           
            {
                (isError.show && isError.msg) 
                && <Error msg={isError.msg} />
            } 
        </section>
    )
}

export default Home