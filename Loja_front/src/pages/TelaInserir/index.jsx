
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../components/Menu';
import './styles.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Inserir(){

    const [inputNome, setInputNome] = useState("");
    const [inputPreco, setInputPreco] = useState(""); 
    const [inputImagem, setInputImagem] = useState("");
    const api = "https://localhost:7065/api/tapete/post";

    const urlAutoriza = "https://localhost:7065/api/Home/gerente";
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    function limpaInput() {
        setInputNome("");
        setInputPreco("");
        setInputImagem("");
    }

    async function createProduto() {
        await axios.post(api, {
            nome: inputNome,
            preco: inputPreco,
            descricao: inputImagem
        }).then(
            alert("Produto incluido com sucesso!!")
        )
      }

      axios(urlAutoriza, {
       headers: {
        Authorization:
            'Bearer ' + user.token
       }
      }).catch(error =>{
        navigate('/autoriza');
      });
       
    return(
        <>
        <Menu/>
            <div className='fundo'>
                <div className='container-form'>
                    <h5 className='titulo'>Novo Produto</h5>
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
                                    onChange={(event) => {setInputImagem(event.target.value)}}
                                />
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    id='btn-salvar'
                                    onClick={()=> {createProduto()}}>
                                    Salvar
                                </button>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    id='btn-cancelar'
                                    onClick={()=> {limpaInput()}}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}