import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function FilmesVot3(){
    const [filmesVotos4, setFilmesVotos4] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadingFilmesVotos3(){
            const response = await api.get("movie/top_rated", {

                params:{
                    api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                    language: "pt-BR",
                    page: 4,
                }
            })
            setFilmesVotos4(response.data.results.slice(0,20));
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
            <h1>Mais votados / Página 4</h1>
            <div className="lista-filmes">
                {filmesVotos4.map((item) => {
                    return (
                        <article key={item.id}>
                            <Link to={`/filme/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                            </Link>
                        </article>
                    )
                })}
            </div>
            <div className="links-2">
                <button><Link to="/filme/pagina3"><img src={require('../../imgs/arrow-small-left.png')} alt="" /></Link></button>
                <h2>Página 4</h2>
                <button><Link to="/"><img src={require('../../imgs/homeIcon.png')} alt="" className="img-home"/></Link></button>
            </div>
        </div>
    )
    
}

export default FilmesVot3;