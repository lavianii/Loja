import axios from "axios";
const API_URL = "https://localhost:7065/api/Home";

const user = JSON.parse(localStorage.getItem('user'));
const useGetPublico = () => {
    return axios.get(API_URL + "anonimo");
};

async function useGetAutenticado() {
    return await axios.get(API_URL + "autenticado", {
        headers: {
            Authorization:
                'Bearer ' + user.token
        }
    });
};
const UserService = {
    useGetPublico,
    useGetAutenticado
};
export default UserService;