import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

export default function Card({ nome, img, preco }) {
    return (
        <>
            <div class="card">
            <img 
                class="card-img-top" 
                src={img}
                alt="tapete"
                width={100}
                height={180}
            />

                <div class="card-body">
                    <p class="card-text">{nome}</p>
                    <h5 class="card-text-preco">{preco}</h5>
                    <a href="#" class="btn btn-primary" id='botao'>Comprar</a>
                </div>

            </div>
        </>
    );
}