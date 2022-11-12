import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../components/Menu';
import tapete from '../../images/Tapetes.png';
import './styles.css';
import Card from '../../components/card/Card';

export default function TelaInicial(){
    return(
        <>
          <Menu/>
          <div className='imagem'>
            <img src={tapete} alt='logo' width={1348} height={300}/>
          </div>
          <div className='cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
           
          </div>
          
        
        </>
    )
}