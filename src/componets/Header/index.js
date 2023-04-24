import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink,
} from 'react-router-dom';
import './style.css'
import axios from "axios";

function Header() {
    const [search, setSearch] = React.useState('')
    const [foundMovies, setFoundMovies] = React.useState([])
    const onSearch = async () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=en-US&page=1&include_adult=true&query=${search}`)
            .then(({data}) => {
                console.log(data.results)
                setFoundMovies(data.results)
            })
    }
    const clearSearch = () => {
        setSearch('')
        setFoundMovies([])
    }
    return (
        <header>
            <div className='headerLogo'>
                <div className={'sidebar'}>
                    <h3 style={{color: 'white', fontSize: '20px'}}>KiNOZONA</h3>
                </div>

                <div className="search">
                    <input className='searchInput' value={search} onChange={(e) => setSearch(e.target.value)} type="text"
                           placeholder="поиск фильмов"/>
                    <button className='searchButton'  onClick={onSearch}>Поиск</button>
                    <button className='searchButton' onClick={clearSearch}>Очистить</button>
                    {
                        search && foundMovies.length ? <div className="extendedSearch">
                            {
                                foundMovies.map((movie) => (
                                    <Link to={`show-movie/${movie.id}`}>
                                        <div className="foundMovie">{movie.title}</div>

                                    </Link>
                                ))
                            }
                        </div> : null
                    }

                </div>
                <div className="sign-up">
                    <button className='logButton'>sign up</button>
                    <button className='logButton'>log in</button>
                </div>
            </div>
            <nav className='navMenu'>
                <NavLink to="/">HOME</NavLink>
                <NavLink to={'/MovieList'}>Популярные</NavLink>
                <NavLink to="/page">Фильмы</NavLink>
                <NavLink to="/Tvshows">Сериалы</NavLink>
                <NavLink to="/People">Люди</NavLink>
            </nav>
        </header>
    );
}

export default Header;