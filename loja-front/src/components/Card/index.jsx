import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Link } from 'react-router-dom';

export default function Card({ nome, img, preco }) {
    return (
        <>
            <div className="card">
            <img 
                className="card-img-top" 
                src={img}
                alt="tapete"
                width={100}
                height={180}
            />

                <div className="card-body">
                    <p className="card-text">{nome}</p>
                    <h5 className="card-text-preco">{preco}</h5>
                    <Link to='/' className="btn btn-primary" id='botao'>Comprar</Link>
                </div>

            </div>
        </>
    );
}