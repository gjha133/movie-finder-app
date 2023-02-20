import { Link } from "react-router-dom"
import { imgBaseUrl } from "../context/context"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MovieCard = ({movie}) => {
    let movieName = movie.title.substring(0,24)
    movieName = movie.title.length >= 24 ? movieName + '...' : movieName

    return (
            <Link to={`/movie/:${movie.id}`} >
                <div className='movieCard' >
                    <LazyLoadImage
                        alt='movie-poster'
                        src={`${imgBaseUrl}/${movie.poster_path}`} 
                        className="moviecard-image"
                        effect="blur"
                    />
                    <div className='title'>{movieName}</div>
                    <button className="show">Show details</button>
                </div>
            </Link>
    )
}

export default MovieCard