import axios from "axios";

// yuri-alberto/json/

const api = axios.create({
    baseURL: "https://api.meutimao.com.br/jogador-do-corinthians/"
});

export default api;