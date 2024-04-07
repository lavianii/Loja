import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


import autentificaService from '../../services/autentificaService'
import Menu from "../../components/Menu";

export default function Login() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const manipularLogin = async (evento) => {
        evento.preventDefault();

        if (!usuario || !senha) {
            setMsg("Usuario ou senha invalido");
        } else {
            autentificaService.login(usuario, senha)
                .then(
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
                );

        }

    }

    return (
        <>
            <Menu />
            <div className="background">
                <div className="container-login">
                    <h5 className='titulo'>Login</h5>
                    <form className='form' onSubmit={manipularLogin}>
                        <div className="input">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                value={usuario}
                                placeholder="Usuario"
                                onChange={({ target }) => {
                                    setUsuario(target.value);
                                }}

                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Senha"
                                value={senha}
                                onChange={({ target }) => {
                                    setSenha(target.value);
                                }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">Entrar</button>
                        <p className='erro'>{msg}</p>
                    </form>
                </div>
            </div>
        </>
    )
}