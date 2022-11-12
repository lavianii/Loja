import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../components/Menu';
import tapete from '../../images/Tapetes.png';
import './styles.css';
import Card from '../../components/Card';

export default function TelaInicial(){
    return(
        <>
          <Menu/>
          <div className='imagem'>
            <img src={tapete} alt='logo' width={1348} height={300}/>
          </div>
          <div className='cards'>
            <Card 
              nome={"Tapete cinza"}
              preco={"$120.20"}
              img={"https://images.tcdn.com.br/img/img_prod/740651/tapete_mianmar_ref_006_azul_2_50x3_00m_5863_1_d82323d168f974a4efecda9fd661ecca.jpg"}
            />
          </div>
        </>
    )
}