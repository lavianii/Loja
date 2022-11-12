import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from '../../images/logoP.png';

import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <div className='imagem'>
                
              <img src={Logo} alt='logo' width={310} height={210}/>
            
        
                <nav className="nav" >
            
                        <Link
                        className='nav-link'
                        to={'/'}
                        >
                            Home
                        </Link>

                        <Link 
                        className='nav-link active'
                        to={'/login'}
                        >
                            Login
                        </Link>

                        <Link 
                        className='nav-link active'
                        to={'/inserir'}
                        >
                            Inserir
                        </Link>

                </nav>

           </div>      
        </>
    );

}