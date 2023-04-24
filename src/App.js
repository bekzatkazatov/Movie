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


function App() {
    return (
        <div style={{background:'#160119'}}>
            <div className='container'>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/MovieList'} element={<MovieList/>}/>
                        <Route path={'/People'} element={<People/>}/>
                        <Route path={'/Tvshows'} element={<Tvshows/>}/>
                        <Route path={'/show-movie/:id'} element={<ShowMovie/>}/>
                    </Routes>
                </BrowserRouter>


            </div>
            <Footer/>
        </div>
    );
}

export default App;
