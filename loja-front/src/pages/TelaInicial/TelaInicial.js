import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../components/menu/Menu';
import tapete from '../../images/Tapetes.png';
import './TelaInicial.css';
import Card from '../../components/card/Card';

export default function TelaInicial(){
    return(
        <>
          <Menu/>
          <div className='imagem'>
            <img src={tapete} alt='logo' width={1510} height={300} />
          </div>
          <div>
            <Card/>
          </div>
          
        
        </>
    )
}