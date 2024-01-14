import React from 'react';
import {Link} from 'react-router-dom'

import BotaoVoltar from '../../componentes/BotaoVoltar'

import './style.css'

const PaginaFrontEnd = () => {

return (
    <div className='limita-conteudo'>
        <h1>React.js</h1>

        <p>
            React é uma biblioteca JavaScript para a criação de interfaces de usuário e, nesse contexto, uma das tecnologias mais utilizadas pelo mercado. No guia abaixo você aprenderá quais são os pré-requisitos para iniciar no React do jeito certo e como criar as suas primeiras SPAs com ela.
        </p>
        <a href="https://www.devmedia.com.br/react/" target='_blank'> Guia de React</a>

        <BotaoVoltar />
    </div>
)
};

export default PaginaFrontEnd;