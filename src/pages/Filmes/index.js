import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme.css';
import './filmeRes.css';
import { toast } from "react-toastify";

import api from "../../services/api";

function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


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
                // console.log("Filme nao encontrado");
                navigate("/", {replace: true});
                
            })
        }
        loadFilme();

        return () => {
            console.log("Conteudo desmontado");
        }
    }, [navigate, id])

    function SalvarFilme(){
        const lista = localStorage.getItem("FlexFlix");

        // Se a (Lista) existir continuamos com ela, se nao, ele cria um array vazio.
        // Se estiver alguma coisa na lista, ele joga para a variavel (filmeSalvos), se nao ele cria um array.
        let filmesSalvos = JSON.parse(lista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme ja esta na sua lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("FlexFlix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso");
        
    }


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

             <div className="action-button">
                <button onClick={SalvarFilme}>Salvar</button>
                <button><a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a></button>
                 
             </div>
        </div>
    )
}

export default Filme;