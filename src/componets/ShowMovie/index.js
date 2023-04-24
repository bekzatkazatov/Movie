import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const ShowMovie = () => {
    const params = useParams()
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7f7ff843e3ed2f93a548e15db507c48f&&language=ru-US`)
            .then(({data}) => {
                console.log(data)
                setMovie(data)
            })
    }, [params.id])
    return (
        <div>
            {
                movie && <div className={'row'}>
                    <div className={'col-3'} key={movie.id}>
                        <div className="box">
                            <img
                                className={'img-popular'}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt=""/>
                            <div className={'info'}>

                                <h3 style={{marginTop: '0px', fontSize: '22px', color: 'white'}}>{movie.title}</h3>
                            </div>
                        </div>

                    </div>
                </div>
            }

        </div>

    );
};

export default ShowMovie;