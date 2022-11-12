
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas';


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Rotas />
      </div>
    </BrowserRouter>
  );
}


