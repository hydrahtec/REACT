import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../paginas/PaginaInicial';
import PaginaFrontEnd from '../paginas/PaginaFrontEnd';
import PaginaBackEnd from '../paginas/PaginaBackEnd';

const Rotas = () => {

return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PaginaInicial />}/>
                <Route path='/src/paginas/PaginaFrontEnd' element={<PaginaFrontEnd />}/>
                <Route path='/src/paginas/PaginaBackEnd' element={<PaginaBackEnd />}/>
            </Routes>
        </BrowserRouter>
    </div>
)
};
export default Rotas;