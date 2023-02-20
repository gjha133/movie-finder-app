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
    const [page, setPage] = useState(1)
    const [isError, setIsError] = useState(false)


    const getMovies = async() => {
        // setIsLoading(false)
        await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${search}`)
            .then((res) => {
                setMovies(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsError(true)
            })
    }

    const getPopularMovies = async() => {
        setIsLoading(true)
        await axios.get(`${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US&page=${page}`)
            .then((res) => {
                setMovies(prev => [...prev, ...res.data.results])
                setIsLoading(false)
            })
            .catch((err) => {
                // console.log(err)
                setIsError(true)
            })
    }

    useEffect(() => {
        getMovies()
    }, [search])

    useEffect(() => {
        if(search == '') {
            getPopularMovies()
        }
    }, [search, page])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = async () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setIsLoading(true)
            setPage(prev => prev + 1)
        }
    }

    const states = {
        movies,
        setMovies,
        isLoading,
        setIsLoading,
        isError,
        search,
        setSearch,
        page, 
        setPage
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