import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const lista = localStorage.getItem("FlexFlix");
        setFilmes(JSON.parse(lista) || []);
    }, [])

    function ExcluirFilme(id){

        //ele vai filtrar os items e retornar
        let filtroFilmes = filmes.filter( (item) => {
            //ele vai devolver todos os items que sao diferente do item que esta recebendo.
            return(item.id !== id)
        })
        setFilmes(filtroFilmes);

        //Aqui ele salva  os filmes novamente, menos o excluido.
        localStorage.setItem("FlexFlix", JSON.stringify(filtroFilmes));

        toast.success("Filme excluido com sucesso");
        
    }
    return (
        <div className='salvos'>
            <h1>Meus filmes</h1>
            {filmes.length === 0 && <h3>Você não tem nenhum filme salvo ):</h3>}

            <ul>
                {filmes.map(item => {
                    return (
                        <li key={item.id}>
                            <h2>{item.title}</h2>

                            <div className='conteudo-li'> 
                                <Link to={`/filme/${item.id}`}> Ver detalhes</Link>
                                <button onClick={() => ExcluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}
export default Favoritos;