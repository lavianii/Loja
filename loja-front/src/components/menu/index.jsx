import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import LogoMenor from '../../images/logomenor.jpg';

import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <div className='imagem'>
                
              <img src={LogoMenor} alt='logo' width={340} height={240} />
            
        
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

                </nav>

           </div>      
        </>
    );

}