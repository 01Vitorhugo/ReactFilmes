 import axios from "axios";

// // Base URL https://api.themoviedb.org/3
// // URL da API https://api.themoviedb.org/3/movie/now_playing?api_key=1cd2fc50f766d3b6c3af9119c6551946&language=pt-BR

    const api = axios.create({
     baseURL: 'https://api.themoviedb.org/3'
});

export default api;
