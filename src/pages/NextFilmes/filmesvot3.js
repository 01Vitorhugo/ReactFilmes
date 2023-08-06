import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function FilmesVot3(){
    const [filmesVotos3, setFilmesVotos3] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadingFilmesVotos3(){
            const response = await api.get("movie/top_rated", {

                params:{
                    api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                    language: "pt-BR",
                    page: 3,
                }
            })
            setFilmesVotos3(response.data.results.slice(0,20));
            setLoading(false);
        }
        loadingFilmesVotos3();
    }, [])
    if (loading) {
        return (
            <div className="loading">
                <h1>Carregando Filmes..</h1>
            </div>
        )
    }
    
    return(

        <div className="container-home">
            <h1>Mais votados / Página 3</h1>
            <div className="lista-filmes">
                {filmesVotos3.map((item) => {
                    return (
                        <article key={item.id}>
                            <Link to={`/filme/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                            </Link>
                        </article>
                    )
                })}
            </div>
            <div className="links">
                <button><Link to="/">Home</Link></button>
                <button> <Link to="/filme/maisvotados/pagina2">Página 2</Link></button>
                <button  className="pg-color"><Link to="/filme/maisvotados/pagina3"> Página 3</Link></button>
                <button><Link to="/filme/maisvotados/pagina4"> Página 4</Link></button>

            </div>
        </div>
    )
    
}

export default FilmesVot3;