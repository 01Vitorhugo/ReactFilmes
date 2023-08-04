import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './filme.css';

function Filme(){
    const { id } = useParams();

    return(
        <div className="container">
            <h1>Acesso {id}</h1>
        </div>
    )
}

export default Filme;