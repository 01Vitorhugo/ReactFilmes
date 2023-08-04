import { useState, useEffect } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";
import './home.css';


// URL DA API /movie/now_playing
// KEY DA API  ?api_key= {1cd2fc50f766d3b6c3af9119c6551946&language=pt-BR}

function Home(){
    const [filmes, setFilmes] = useState([]);
    // loading criado para quando a net estiver lenta..
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){

        //AWAIT serve para ele esperar a api carregar antes de carregar outra coisa
        const response = await api.get("movie/now_playing", {
            // Parametros, Chave da api e linguagem.
            params:{
                api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                language: "pt-BR",
                page: 1,
            }
        })

        // slice(0,10) serve para ele listar os 10 primeiros.
       // console.log(response.data.results.slice(0,10));
       setFilmes(response.data.results.slice(0,10));
       setLoading(false);
    }
    loadFilmes();
    },[])


    if(loading){
        return(
            <div className="loading">
                <h1>Carregando Filmes..</h1>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((item)=>{
                    return(
                        <article key={item.id}>
                            <strong>{item.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                            <Link to={`/filme/${item.id}`}>Acessar</Link>
                        </article>
                    )
                })}

            </div>

        </div>
    )
}

export default Home;