import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import Loading from '../components/Loading.component'
import Error from './Error.page'
import MovieList from '../components/MovieList.component'

import { FaArrowCircleUp } from 'react-icons/fa';

const Home = () => {
    
    const { isError, isLoading } = useContext(AppContext)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section>
            {isError && <Error />}
            <MovieList />
            {
                document.documentElement.scrollTop > 300 && 
                (<button className='top'>
                    <FaArrowCircleUp onClick={scrollToTop}/>
                </button>)
            }
        </section>
    )
}

export default Home