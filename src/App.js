import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdicionarCliente from './components/AdicionarCliente'; // Corrija o caminho para dentro de src
import ListarClientes from './components/ListarClientes'; // Corrija o caminho para dentro de src

function Home() {
  return (
    <>
    
    </>
  );
}

function App() {
  return (
    <>
      <div>
      <h1 className='a mt-3'><b>Menu</b></h1>
        <nav>
          <ul>
            <form style={{backgroundColor:'white', borderRadius:'20px'}}>
            <li>
              <Link to="/" style={{color:('black')}} className='a'><h4><b>Home</b></h4></Link>
            </li>
            <hr></hr>
            <li>
              <Link to="/adicionar" style={{color:('black')}} className='a'><h4><b>Adicionar clientes</b></h4></Link>
            </li>
            <hr></hr>
            <li>
              <Link to="/listar" style={{color:('black')}} className='a'><h4><b>Ver lista de clientes</b></h4></Link>
            </li>
            <hr></hr>
            </form>
          </ul>
          <Routes>
            {/* Corrigido para usar <Home /> com H maiúsculo */}
            <Route path="/" element={<Home />} />
            <Route path="/adicionar" element={<AdicionarCliente />} />
            <Route path="/listar" element={<ListarClientes />} />
          </Routes>
        </nav>
      </div>
    </>
  );
}

function Menu() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Menu;
