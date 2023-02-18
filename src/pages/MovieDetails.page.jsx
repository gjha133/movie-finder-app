import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../context/context';
import { API_KEY, API_URL, imgBaseUrl } from '../context/context';
import Loading from '../components/Loading.component';


const MovieDetails = () => {
    
    const { id } = useParams()
    const { isLoading, setIsLoading, setIsError } = useContext(AppContext)
    const [movie, setMovie] = useState([])

    const URL = `${API_URL}movie/${id.substring(1)}?api_key=${API_KEY}&language=en-US`

    const getMovie = async(url) => {
        setIsLoading(true)
        await axios.get(url)
        .then((res) => {
            setMovie(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError({
                show: true,
                msg: err
            })
        })
    }

    useEffect(()=>{
        getMovie(URL)
    }, [])
    
    return (
        <section className='movieDetail'>
            {
                isLoading ? <Loading/>
                :
                <div className="container" 
                style={{
                    backgroundImage: `url(${`${imgBaseUrl}${movie.backdrop_path}`})`
                }}
                >
                <div className="details-container">
                    <img src={`${imgBaseUrl}/${movie.poster_path}`} alt="" className='movie-img'/> 
                    <div className='info-container'>
                        <p className='title'>{movie.title}</p>
                        <div className="date">
                            <p>
                                {
                                    movie.genres && movie.genres.map(genre => 
                                    <span key={genre.id}> {genre.name}  </span>)
                                }
                            </p>
                            <p>{movie.status}</p>
                            <p>
                                {movie.release_date} 
                            </p>
                            <p>
                                Avg. Rating: {movie.vote_average}/10
                            </p>
                            
                        </div>
                        <div className='tagline'>
                            {movie.tagline}
                        </div>
                        <div className='overview-container'>
                            <p className='overview'>Overview</p>
                            <p className='overview-text'>
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                </div>
                <Link to={'/'} >
                    <button>Go back to Home</button>
                </Link>
            </div>
            }
        </section>
    )
}

export default MovieDetails