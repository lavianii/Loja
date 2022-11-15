import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

import Login from "./pages/Login";
import TelaInicial from "./pages/TelaInicial";
import Inserir from "./pages/TelaInserir";
import Atualizar from "./pages/TelaAtualizar";
import autentificaService from './services/autentificaService';
import Autorizacao from "./pages/Autorizacao";
import Logout from "./pages/Logout";

export default function Rotas(){

    const [usuarioAtual,setUsuarioAtual ] = useState(undefined);

    useEffect(() =>{
        const user = autentificaService.getUsuarioAtual();

        if(user){
            setUsuarioAtual(user);
        }
    },[]);


    return(
        <Routes>
            <Route exact path="/" element={<TelaInicial />} />

            <Route path="/login" element={<Login />}/>
            
            <Route path='/logout' element={<Logout />} />

            <Route path='/autoriza' element={<Autorizacao />} />

            <Route path="*" to='/' />

            {usuarioAtual ? (
                <Route exact path="/inserir" element={<Inserir />}/>

            ) : (
                <Route exact path="/inserir" element={<Autorizacao />}/>
            )}
            
            {usuarioAtual ? (
                <Route exact path="/atualizar" element={<Atualizar />}/>
            ) : (
                <Route exact path="/atualizar" element={<Autorizacao />}/>
            )}
            
        </Routes>
    )
}