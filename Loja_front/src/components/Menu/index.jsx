import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from '../../images/logoP.png';
import autentificaService from '../../services/autentificaService';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Menu() {

    const [usuarioAtual,setUsuarioAtual ] = useState(undefined);

    useEffect(() =>{
        const user = autentificaService.getUsuarioAtual();

        if(user){
            setUsuarioAtual(user);
        }
    },[]);


    return (
        <>
            <div className='imagem'>
              <img src={Logo} alt='logo' width={310} height={210} className="img"/>
                <nav className="nav" >
                        <Link
                        className='nav-link'
                        to={'/'}
                        >
                            Home
                        </Link>
                        {usuarioAtual ? (
                            <Link 
                            className='nav-link'
                            to={'/logout'}
                            >
                                Logout
                            </Link>
                        ) : (
                            <Link 
                            className='nav-link active'
                            to={'/login'}
                            >
                                Login
                            </Link>
                        )}
                        <Link 
                        className='nav-link active'
                        to={'/inserir'}
                        >
                            Inserir
                        </Link>
                        <Link 
                        className='nav-link active'
                        to={'/atualizar'}
                        >
                            Atualizar
                        </Link>
                </nav>
           </div>      
        </>
    );
}