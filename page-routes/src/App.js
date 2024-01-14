import React from 'react';
import Rotas from './rotas/'

import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
