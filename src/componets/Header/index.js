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
                    <button className='searchButton'>search</button>
                </div>
                <div className="sign-up">
                    <button className='logButton'>sign up</button>
                    <button className='logButton'>log in</button>
                </div>
            </div>
            <nav className='navMenu'>
                <a href="/">HOME</a>
                <a href="/MovieList">POPULAR</a>
                <a href="/latest-page">NEW</a>
                <a href="/page">LIST</a>
            </nav>
        </header>
    );
}

export default Header;