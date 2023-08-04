import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './filme.css';
import api from "../../services/api";

function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "1cd2fc50f766d3b6c3af9119c6551946",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);

            })
            .catch(()=>{
                console.log("Filme nao encontrado");
            })
        }
        loadFilme();

        return () => {
            console.log("Conteudo desmontado");
        }
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h1>Carregando detalhes..</h1>
            </div>
        )
    }

    return(
        <div className="container">
            <h1>{filme.title} - Nota: {filme.vote_average} / 10  </h1>
             <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
             <p>{filme.overview}</p>
             <strong>Data de lançamento {filme.release_date}</strong>
        </div>
    )
}

export default Filme;