import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

export default function Card() {
    return (
        <>
            <div class="card">
            <img 
                class="card-img-top" 
                src="https://product-hub-prd.madeiramadeira.com.br/3423664/images/7e67a120-64e7-41ff-927f-5c2c7e34324a85444842tapeteparasalaconfortaveldepeloalto200mx140mvariascorescasencorbege012bg8362581600x600.jpg?width=500&canvas=1:1&bg-color=FFF" 
                alt="Imagem de capa do card" 
                width={100} 
                height={180}
            />

                <div class="card-body">
                    <p class="card-text">Tapete cinza</p>
                    <h5>$159,90</h5>
                    <a href="#" class="btn btn-primary">Visitar</a>
                </div>

            </div>
        </>
    );
}