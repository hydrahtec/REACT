import React from 'react';

import './style.css'
import { Link } from 'react-router-dom';


const PaginaInicial = () => {

    return (
        <div>

            <h1>Escolha seu caminho em JavaScript</h1>

            <div className='conteudo-opcoes'>
                <Link className='opcao-front-end' to='/src/paginas/PaginaFrontEnd'>Front-End</Link>
                <Link className='opcao-back-end' to='/src/paginas/PaginaBackEnd'>Back-End</Link>
            </div>

        </div>
    )
};

export default PaginaInicial;