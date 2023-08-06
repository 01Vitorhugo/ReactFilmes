import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function FilmesNext4() {

    const [next4, setNext4] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {

            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                    language: "pt-BR",
                    page: 4,
                }
            })
            setNext4(response.data.results.slice(0, 20));
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
            <h1>Lançamentos / Recentes / Página 4</h1>
            <div className="lista-filmes">
                {next4.map((item) => {
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
                <button> <Link to="/filme/pagina2">Página 2</Link></button>
                <button><Link to="/filme/pagina3"> Página 3</Link></button>
                <button className="pg-color"><Link to="/filme/pagina4"> Página 4</Link></button>

            </div>
        </div>
    )
}
export default FilmesNext4;