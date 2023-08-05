import { useState, useEffect } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";
import './home.css';
import './homeRes.css';


// URL DA API /movie/now_playing
// KEY DA API  ?api_key= {1cd2fc50f766d3b6c3af9119c6551946&language=pt-BR}

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [filmes2, setFilmes2] = useState([]);
    const [filmes3, setFilmes3] = useState([]);
    const [filmesVotos, setFilmesVotor] = useState([]);
    const [filmesVotos2, setFilmesVotor2] = useState([]);
    const [filmesVotos3, setFilmesVotor3] = useState([]);
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
       // async sempre devolve o valor dentro da propriedade data
       setFilmes(response.data.results.slice(0,20));
       setLoading(false);
    }
    loadFilmes();
    },[])

    useEffect(()=>{
        async function loadFilmes2(){

        //AWAIT serve para ele esperar a api carregar antes de carregar outra coisa
        const response = await api.get("movie/now_playing", {
            // Parametros, Chave da api e linguagem.
            params:{
                api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                language: "pt-BR",
                page: 2,
            }
        })
       setFilmes2(response.data.results.slice(0,20));
       setLoading(false);
    }
    loadFilmes2();
    },[])

    useEffect(()=>{
        async function loadFilmes3(){

        //AWAIT serve para ele esperar a api carregar antes de carregar outra coisa
        const response = await api.get("movie/now_playing", {
            // Parametros, Chave da api e linguagem.
            params:{
                api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                language: "pt-BR",
                page: 3,
            }
        })
       setFilmes3(response.data.results.slice(0,20));
       setLoading(false);
    }
    loadFilmes3();
    },[])

    useEffect(()=> {
        async function loadingFilmesVotos(){

            const response = await api.get("movie/top_rated", {
                params:{
                    api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilmesVotor(response.data.results.slice(0,20));
            setLoading(false);

        }
        loadingFilmesVotos();
    })

    useEffect(()=> {
        async function loadingFilmesVotos2(){

            const response = await api.get("movie/top_rated", {
                params:{
                    api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                    language: "pt-BR",
                    page: 2,
                }
            })
            setFilmesVotor2(response.data.results.slice(0,20));
            setLoading(false);

        }
        loadingFilmesVotos2();
    })

    useEffect(()=> {
        async function loadingFilmesVotos3(){

            const response = await api.get("movie/top_rated", {
                params:{
                    api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                    language: "pt-BR",
                    page: 3,
                }
            })
            setFilmesVotor3(response.data.results.slice(0,20));
            setLoading(false);

        }
        loadingFilmesVotos3();
    })
  

    if(loading){
        return(
            <div className="loading">
                <h1>Carregando Filmes..</h1>
            </div>
        )
    }

    return(
        <div className="container-home">
            <h1>Lançamentos / Recentes</h1>
            <div className="lista-filmes">
                {filmes.map((item)=>{
                    return(
                        <article key={item.id}>
                            <Link to={`/filme/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                            </Link>
                        </article>
                    )
                })}
            </div>

            <div className="lista-filmes">
                {filmes2.map((item)=>{
                    return(
                        <article key={item.id}>
                            <Link to={`/filme/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                            </Link>
                        </article>
                    )
                })}
            </div>

            <div className="lista-filmes">
                {filmes3.map((item)=>{
                    return(
                        <article key={item.id}>
                            <Link to={`/filme/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                            </Link>
                        </article>
                    )
                })}
            </div>

                <h1>Mais votados</h1>
            <div className="lista-filmes">
                {filmesVotos.map((item)=>{
                    return(
                        <article key={item.id}>
                            <Link to={`/filme/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                            </Link>
                        </article>
                    )
                })}

            </div>

            <div className="lista-filmes">
                {filmesVotos2.map((item)=>{
                    return(
                        <article key={item.id}>
                            <Link to={`/filme/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                            </Link>
                        </article>
                    )
                })}

            </div>

            <div className="lista-filmes">
                {filmesVotos3.map((item)=>{
                    return(
                        <article key={item.id}>
                            <Link to={`/filme/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                            </Link>
                        </article>
                    )
                })}

            </div>


        </div>
    )
}

export default Home;