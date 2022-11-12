import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../components/Menu';
import tapete from '../../images/Tapetes.png';
import './styles.css';
import Card from '../../components/Card';
import { useEffect, useState } from "react";
import axios from "axios";

export default function TelaInicial(){

  const [produtos, setProdutos] = useState([]);
  const api = "https://localhost:7065/api/Tapete/GetAll";

  useEffect(() => {
    axios(api).then((reponse) => {
      setProdutos(
        reponse.data.map((produtos) => ({
          id: produtos.id,
          nome: produtos.nome,
          preco: produtos.preco,
          descricao: produtos.descricao,
        }))
      );
    });
  }, []);

    return(
        <>
          <Menu/>
          <div className='imagem'>
            <img src={tapete} alt='logo' width={1348} height={300}/>
          </div>
          <div className='cards'>
          {produtos.map((produto) => (
          <Card
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            img={produto.descricao}
          />
        ))}

          </div>
        </>
    )
}