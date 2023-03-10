import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../context/context';
import { API_KEY, API_URL, imgBaseUrl } from '../context/context';
import Loading from '../components/Loading.component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const MovieDetails = () => {
    
    const { id } = useParams()
    const { isLoading, setIsLoading, setIsError } = useContext(AppContext)
    const [movie, setMovie] = useState([])

    const URL = `${API_URL}movie/${id.substring(1)}?api_key=${API_KEY}&language=en-US`

    const getMovieDetails = async(url) => {
        setIsLoading(true)
        await axios.get(url)
        .then((res) => {
            setIsLoading(false)
            setMovie(res.data)
        })
        .catch((err) => {
            setIsError({
                show: true,
                msg: err
            })
        })
    }

    useEffect(()=>{
        getMovieDetails(URL)
    }, [0])
    
    return (
        <section className='movieDetail'>
            {isLoading ? <Loading /> : 
                <LazyLoadComponent>
                    <div className="container" effect='blur'
                style={{
                    backgroundImage: `url(${`${imgBaseUrl}${movie.backdrop_path}`})`
                }}
                >
                    <div className="details-container">
                        <LazyLoadImage
                            alt='movie-poster'
                            effect="blur"
                            src={`${imgBaseUrl}/${movie.poster_path}`}
                            className="movie-img"
                        />
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
                                    {movie.vote_average}/10
                                </p>
                            </div>
                            <div className='tagline'>
                                "{movie.tagline}"
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
                        <button>Back to Home</button>
                    </Link>
                    </div>
                </LazyLoadComponent>
            } 
        </section>
    )
}

export default MovieDetails