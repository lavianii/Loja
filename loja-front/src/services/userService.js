import axios from "axios";
const API_URL = "https://localhost:7065/api/";
// Cadastro Aluno: role professor
// Cadastro Curso: role professor
// Carômetro: todos

const user = JSON.parse(localStorage.getItem('user'));
const getPublico = () => {
    return axios.get(API_URL + "anonimo");
};

const getAutenticado = async () => {
    return await axios.get(API_URL + "funcionario", {
        headers: {
            Authorization:
                'Bearer ' + user.token
        }
    });
};
const UserService = {
    getPublico,
    getAutenticado
};
export default UserService;