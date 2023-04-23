import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import MovieList from "./componets/MovieLIst";


function App() {
  return (
     <div style={{background:'grey'}}>
         <div className='container'>
             <Header/>
             <Hero/>

             <BrowserRouter>

                 <Routes>

                     <Route path={'/MovieList'}element={<MovieList/>}/>

                 </Routes>
             </BrowserRouter>


         </div>
     </div>
  );
}

export default App;
