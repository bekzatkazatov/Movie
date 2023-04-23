import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './style.css'
const MovieList = () => {

    const [movies,setMovies] = useState([])
    const [next,setNext] = useState(1)
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=en-US&page=${next}`)
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
            <div style={{display:'flex',justifyContent:'space-between',paddingTop:'20px'}}>
                <button className="PopButton"   disabled={next ===1 ?true: ''} onClick={prevPage}>prev</button>
                <button className="PopButton"  disabled={next===500?true: ''} onClick={nextPage}>next</button>
            </div>
            <div className={'row'}>
                {
                    movies.map((movie) =>{
                        return(
                            <div className={'col-3'} key={movie.id}>
                                <div className="box">
                                    <img
                                        className={'img-popular'}
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt=""/>
                                    <div className={'info'}>
                                        <h3 style={{marginTop:'0px',fontFamily:'Murecho',color:'white'}}>{movie.original_title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MovieList;