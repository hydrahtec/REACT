// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//     let navigate = useNavigate();

//     const handleClick = () => {
//         navigate("/pagina-inicial") ;
//     }


//     return (
//         <div>
//         <p>Entrar: </p>
//         <button onClick={handleClick}>Página principal</button>
//         </div>
//     );
// };

import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   let navigate= useNavigate();
   
useEffect(() => {
    if (window.confirm('Você tem certeza que quer entrar?')) {
        console.log('Entrar');
    } else {
        console.log('Sair');
    };
}, []);

useEffect(() => {
    console.log(email);
}, [email]);

useEffect(() => {
    console.log(password);
}, [password]);

 const cliqueBotao = () => {
    console.log(email);
    console.log(password);
 };

const voltar = () => {
    navigate('/pagina-inicial');
}
return (
    <div>
        <form>
            <label>
                <span>Email: </span>
                <input value={email} onChange={e => setEmail(e.target.value) } />
            </label>

            <label>
                <span>Senha: </span>
                <input type="password" value={password} onChange={e => setPassword(e.target.value) } />
            </label>

            <button type="button" onClick={cliqueBotao} >
                Entrar
            </button>
        <button type='button' onClick={voltar}>Voltar</button>
        </form>
    </div>
    );
};