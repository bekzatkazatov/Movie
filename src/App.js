import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import MovieList from "./componets/MovieLIst";
import TopRated from "./componets/TopRated";
import Footer from "./componets/Footer";
import People from "./componets/People";
import Tvshows from "./componets/TVshows";
import Home from "./componets/Home/index";
import ShowMovie from "./componets/ShowMovie";
import Movie from "./componets/Movie";


function App() {
    return (
        <div style={{background:'#160119'}}>
            <div className='container'>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/Popular'} element={<MovieList/>}/>
                        <Route path={'/People'} element={<People/>}/>
                        <Route path={'/Tv-shows'} element={<Tvshows/>}/>
                        <Route path={'/show-movie/:id'} element={<ShowMovie/>}/>
                        <Route path={'/movie'} element={<Movie/>}/>
                        </Routes>
                </BrowserRouter>


            </div>
            <Footer/>
        </div>
    );
}

export default App;
