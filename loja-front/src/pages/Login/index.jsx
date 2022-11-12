import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


import autentificaService from '../../services/autentificaService'
import Menu from "../../components/Menu";

export default function Login() {

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const manipularLogin = async (evento) => {
        evento.preventDefault();

        if (!nome || !senha) {
            setMsg("Login ou senha esta invalido");
        } else {
            autentificaService.login(nome, senha).then(
                () => {
                    console.log("localStorage" + localStorage.getItem("user"));
                    navigate("/")
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.res &&
                            error.res.data &&
                            error.res.data.msg) ||
                        error.message ||
                        error.toString();
                    setMsg(resMessage);
                }
            )

        }

    }

    return (
        <>
            <Menu />
            <div className="container">
                <form onSubmit={manipularLogin}>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input
                            className="form-control"
                            type="text"
                            value={nome}
                            placeholder="seu usuario"
                            onChange={({ target }) => {
                                setNome(target.value);

                                setMsg("TESTE")
                            }}

                        />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Senha"
                            value={senha}
                            onChange={({ target }) => {
                                setSenha(target.value);

                                setMsg("SENHA");
                            }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg">LOGAR</button>
                    <h3>{msg}</h3>
                </form>

            </div>

        </>
    )
}