import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {

    const { search, setSearch, setIsLoading } = useContext(AppContext)

    const handleChange = (e) => {
        setIsLoading(true)
        setSearch(e.target.value)
    }

    const handleClick = () => {
        setIsLoading(true)
        setSearch('')
    }

    return (
        <nav>
            <Link to={'/'} onClick={handleClick}>
                <h1>Movie Finder</h1>
            </Link>
            <div>
                <input 
                    type="search" 
                    id='search'
                    name="search" 
                    placeholder='Search...' 
                    value={search}
                    onChange={handleChange}
                />
            </div>
        </nav>
    )
}

export default Header