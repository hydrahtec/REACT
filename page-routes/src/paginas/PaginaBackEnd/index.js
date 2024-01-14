import React from 'react';
import BotaoVoltar from '../../componentes/BotaoVoltar';

import './style.css'

const PaginaBackEnd = () => {

return (
    <div className='limita-conteudo'>
       <h1>Node.js</h1>

        <p>
            Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos construir aplicações web em geral, desde web sites até APIs e microsserviços.
        </p>

        <a href="https://www.devmedia.com.br/node-js/" target='_blank'> Guia de Node.js</a>

        <BotaoVoltar /> 
    </div>
)
};

export default PaginaBackEnd;