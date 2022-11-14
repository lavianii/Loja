import axios from "axios";

const apiUrl = "https://localhost:7065/api/Home/";

const login  = async (username, senha) => {

    //inclui o usuario no localStorage do navegador
    return axios
    .post(apiUrl + "login", {
        username,
        senha 
    })
    .then(response => {
        console.log("response: " + JSON.stringify(response.data.token));
        if(response.data.token){
            localStorage.setItem("user",JSON.stringify(response.data));
        }
        return response.data;
    });
}

const logout = () => {
    //remove do localStorage
    localStorage.removeItem("user");
}

const getUsuarioAtual = () => {
    //obtem as informacoes do localStorage
    return JSON.parse(localStorage.getItem("user"));
}

const AuthService = {
    login,
    logout,
    getUsuarioAtual
}



export default AuthService;