import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const API_URL = 'https://api.themoviedb.org/3/'
export const API_KEY = '1a11456b54a2fe965081d3605c51dfff'
export const imgBaseUrl = "https://image.tmdb.org/t/p/original"

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [isError, setIsError] = useState({
        show: 'false',
        msg: ''
    })
    

    const getMovies = async(url) => {
        setIsLoading(true)
        await axios.get(url)
        .then((res) => {
            setMovies(res.data.results)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError({
                show: true,
                msg: err
            })
        })
    }

    const getPopularMovies = async(url) => {
        setIsLoading(true)
        await axios.get(url)
        .then((res) => {
            setMovies(res.data.results)
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
        if(search === '') {
            getPopularMovies(`${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US&page=1`)
        } else {
            getMovies(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`)
        }
    }, [search])


    const states = {
        movies, 
        setMovies,
        isLoading, 
        setIsLoading,
        isError,
        search, 
        setSearch,
    }

    return (
        <AppContext.Provider 
            value={states}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }