import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './next.css'

function FilmesNext3() {

    const [next3, setNext3] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {

            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                    language: "pt-BR",
                    page: 3,
                }
            })
            setNext3(response.data.results.slice(0, 20));
            setLoading(false);
        }
        loadFilmes();
    }, [])

    if (loading) {
        return (
            <div className="loading">
                <h1>Carregando Filmes..</h1>
            </div>
        )
    }

    return (
        <div className="container-home">
            <h1>Lançamentos / Recentes / Página 3</h1>
            <div className="lista-filmes">
                {next3.map((item) => {
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
                <button><Link to="/filme/pagina2"><img src={require('../../imgs/arrow-small-left.png')} alt="" /></Link></button>
                <h2>Página 3</h2>
                <button><Link to="/filme/pagina4"><img src={require('../../imgs/arrow-small-right.png')} alt="" /></Link></button>
            </div>
        </div>
    )
}
export default FilmesNext3;