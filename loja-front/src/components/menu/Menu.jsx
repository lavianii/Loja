import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import logoMenor from '../../images/logomenor.jpg';

export default function Menu() {
    return (
        <>
            <div className='imagem'>
                
              <img src={logoMenor} alt='logo' width={340} height={240} />
            
        
                <nav className="nav" >
                        <a className='nav-link ' href="#">Home</a>
                        <a className='nav-link active'href="#">Login</a>
                        <a className='nav-link ' href="#">Inserir produto</a>
                        <a className='nav-link ' href="#">Editar produto</a>
                </nav>

           </div>      
        </>
    );

}