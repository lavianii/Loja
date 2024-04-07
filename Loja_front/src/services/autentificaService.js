import axios from "axios";

const apiUrl = "https://localhost:7065/api/Home/";

async function login(username, senha) {
    return axios
        .post(apiUrl + "login", {
            username,
            senha
        })
        .then(response => {
            console.log("response: " + JSON.stringify(response.data.token));
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
}

function logout() {
    localStorage.removeItem("user");
}

function getUsuarioAtual() {
    return JSON.parse(localStorage.getItem("user"));
}

const AuthService = {
    login,
    logout,
    getUsuarioAtual
}

export default AuthService;