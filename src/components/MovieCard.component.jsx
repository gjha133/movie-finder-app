import { Link } from "react-router-dom"
import { imgBaseUrl } from "../context/context"
// import altImg from '../assets/placeholder.png'

const MovieCard = ({movie}) => {
    let movieName = movie.title.substring(0,24)
    movieName = movie.title.length >= 24 ? movieName + '...' : movieName

    return (
            <Link to={`/movie/:${movie.id}`} >
                <div className='movieCard' >
                    <img src={`${imgBaseUrl}/${movie.poster_path}`} alt='bg-image' />
                    <div className='title'>{movieName}</div>
                    <button className="show">Show details</button>
                </div>
            </Link>
    )
}

export default MovieCard