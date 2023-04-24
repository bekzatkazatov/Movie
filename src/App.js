import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import MovieList from "./componets/MovieLIst";
import TopRated from "./componets/TopRated";
import Footer from "./componets/Footer";
import People from "./componets/People";
import Tvshows from "./componets/TVshows";


function App() {
  return (
     <div style={{background:'#160119'}}>
         <div className='container'>
             <BrowserRouter>
                 <Header/>
                 <Hero/>
                 <Routes>
                     <Route path={'/MovieList'} element={<MovieList/>}/>
                     <Route path={'/People'} element={<People/>}/>
                     <Route path={'/Tvshows'} element={<Tvshows/>}/>
                 </Routes>
                 <TopRated/>

             </BrowserRouter>


         </div>
         <Footer/>
     </div>
  );
}

export default App;
