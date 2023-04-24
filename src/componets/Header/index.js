import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import './style.css'

function Header() {
    return (
        <header>
            <div className='headerLogo'>
                <div className={'sidebar'}>
                    <h3 style={{color:'white',fontSize:'20px'}}>KiNOZONA</h3>
                </div>

                <div className="search">
                    <input className='searchInput' type="text"
                    placeholder="поиск фильмов"/>
                    <button className='searchButton'>Поиск</button>
                </div>
                <div className="sign-up">
                    <button className='logButton'>sign up</button>
                    <button className='logButton'>log in</button>
                </div>
            </div>
            <nav className='navMenu'>
                <a href="/">HOME</a>
                <a href="/MovieList">Популярные</a>
                <a href="/page">Фильмы</a>
                <a href="/Tvshows">Сериалы</a>
                <a href="/People">Люди</a>

            </nav>
        </header>
    );
}

export default Header;