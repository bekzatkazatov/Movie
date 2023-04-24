import React, {useEffect, useState} from 'react';
import axios from "axios";
import './style.css'
import {Link} from "react-router-dom";
const MovieList = () => {
    const [movies,setMovies] = useState([])
    const [next,setNext] = useState(1)
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=ru-US&page=${next}`)
            .then(({data}) =>{
                console.log(data.results)
                setMovies(data.results)
            })
    },[next])
    const nextPage =()=>{
        setNext(next +1)
        console.log(next)
    }
    const prevPage =()=>{
        setNext(next -1)
        console.log(next)
    }
    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-between',padding:'25px 10px'}}>
                <button className="PopButton"   disabled={next ===1 ?true: ''} onClick={prevPage}>Пред.</button>
                <h2 style={{margin:'5px',color:'white',fontSize:'28px'}}>Популярные</h2>
                <button className="PopButton"  disabled={next===500?true: ''} onClick={nextPage}>След.</button>
            </div>
            <div className={'row'}>
                {
                    movies.map((movie) =>{
                        return(
                            <div className={'col-3'} key={movie.id}>
                                <Link to={`/show-movie/${movie.id}`}>
                                    <div className="box">
                                        <img
                                            className={'img-popular'}
                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                            alt=""/>
                                        <div className={'info'}>

                                            <h3 style={{marginTop:'0px',fontSize:'22px',color:'white'}}>{movie.title}</h3>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MovieList;