import React, {useEffect, useState} from 'react';
import axios from "axios";


const Tvshows = () => {
    const [movies,setMovies] = useState([])
    const [next,setNext] = useState(1)
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=ru-US&page=${next}`)
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
                <button className="PopButton"  disabled={next===500?true: ''} onClick={nextPage}>След.</button>
            </div>
            <div className={'row'}>
                {
                    movies.map((person) =>{
                        return(
                            <div className={'col-3'} key={person.id}>
                                <div className="box">
                                    <img
                                        className={'img-popular'}
                                        src={`https://image.tmdb.org/t/p/w500/${person.poster_path}`}
                                        alt=""/>
                                    <div className={'info'}>
                                        <h3 style={{marginTop:'0px',fontSize:'22px',color:'white'}}>{person.name}</h3>
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

export default Tvshows;