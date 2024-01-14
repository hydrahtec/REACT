import React from 'react';
import PaginaInicial from './componentes/PaginaInicial/';
import Header from './componentes/Header/';
import Footer from './componentes/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PaginaInicial />
      <Footer />
    </div>
  );
}

export default App;
