import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filmes";
import Header from "./components/Header";
import Error from "./pages/Error";
import FilmesNext2 from "./pages/NextFilmes/filmes2";
import FilmesNext3 from "./pages/NextFilmes/filmes3";
import FilmesNext4 from "./pages/NextFilmes/filmes4";
import FilmesVot2 from "./pages/NextFilmes/filmesvot2";
import FilmesVot3 from "./pages/NextFilmes/filmesvot3";
import FilmesVot4 from "./pages/NextFilmes/filmesvot4";


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filme/:id" element={ <Filme/> }/> 
                <Route path="/filme/pagina2" element={ <FilmesNext2/> }/>
                <Route path="/filme/pagina3" element={ <FilmesNext3/> }/>
                <Route path="/filme/pagina4" element={ <FilmesNext4/> }/>

                <Route path="/filme/maisvotados/pagina2" element={ <FilmesVot2/> }/>
                <Route path="/filme/maisvotados/pagina3" element={ <FilmesVot3/> }/>
                <Route path="/filme/maisvotados/pagina4" element={ <FilmesVot4/> }/>

                <Route path="*" element={ <Error/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;