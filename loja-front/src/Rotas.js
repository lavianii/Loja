import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import TelaInicial from "./pages/TelaInicial";

export default function Rotas(){

    return(
        <Routes>
            <Route exact path="/" element={<TelaInicial />} />
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}