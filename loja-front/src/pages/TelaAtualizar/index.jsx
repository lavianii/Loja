import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../components/Menu';
import './style.css';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Atualizar(){

    const [produtos, setProdutos] = useState([]);
    const [tableVisility, setTableVisility] = useState(false);
    const [inputNome, setInputNome] = useState("");
    const [inputPreco, setInputPreco] = useState(""); 
    const [inputImagem, setInputImagem] = useState("");
    const [produtoSelecionado, setProdutoSelecionado] = useState("");

    const apiGet = "https://localhost:7065/api/Tapete/GetAll";
    const apiUpdate = "https://localhost:7065/api/Tapete/put";

    useEffect(() => {
        axios(apiGet).then((reponse) => {
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

    function editar(produto){
        setProdutoSelecionado(produto)
        setTableVisility(true)
    }

    async function update(){
        await axios.put(`${apiUpdate}/${produtoSelecionado.id}`, {
            id: produtoSelecionado.id,
            nome: inputNome,
            preco: inputPreco,
            descricao: inputImagem
          }).then(
            alert("produto Atualizado com sucesso")
          )
    }

    function cancelar(){
        setTableVisility(false)
    }

    return(
        <>
           <Menu/>
           <div className="fundo-imagem">
                <div className='container'>
                    <div className='formulario' style={{ display: tableVisility ? "block" : "none"}}>
                        <form className='form'>
                            <div className='inputs-container' >
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="form-input" 
                                    placeholder="Nome do Produto"
                                    value={inputNome}
                                    onChange={(event) => {setInputNome(event.target.value)}}
                                />
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="form-input" 
                                    placeholder="Preco do Produto"
                                    value={inputPreco}
                                    onChange={(event) => {setInputPreco(event.target.value)}}
                                />
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="form-input" 
                                    placeholder="Link Imagem"
                                    value={inputImagem}
                                    onChange={(event) => {setInputImagem(event.target.value);}}
                                />
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    id='btn-salvar'
                                    onClick={()=> {update()}}>
                                    Salvar
                                </button>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    id='btn-cancelar'
                                    onClick={()=> {cancelar()}}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                <table className="tabela">
                    <thead>
                    <tr className="titulo-tabela">
                        <th className="tab-nome">Nome</th>
                        <th className="tab-preco">Preço</th>
                        <th className="tab-imagem">Imagem</th>
                        <th className="tab-botao"></th>
                    </tr>
                    </thead>
                        <tbody>
                            {produtos.map((produto) =>
                            <tr key={produto.id}>
                                <td>{produto.nome}</td>
                                <td>{"$"+produto.preco}</td>
                                <td> 
                                    <img 
                                    src={produto.descricao}
                                    alt="tapete"
                                    width={65}
                                    height={45}/>
                                </td>
                                <td>
                                <button 
                                onClick={() =>{editar(produto)}} 
                                className="btn btn-primary"
                                id='btn-edit'
                                >
                                    Editar
                                </button>
                                </td>
                            </tr>
                        
                            )}
                        </tbody>
                    </table>
                </div>
           </div>
        </>
    )
}