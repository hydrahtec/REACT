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
/*segunda aula useEffect e useState*/
import {useEffect, useState, useMemo, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { InputLogin } from './components/InputLogin';


export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

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
    // inputPasswordRef.current?.focus();
    // da focus no senha quando o botão é clicado.
 };

const emailLength = useMemo(() => {
    return email.length * 1000;
}, [email.length]);

const voltar = () => {
    navigate('/pagina-inicial');
}
return (
    <div>
        <form>
            <p>O numero de letras do email é: {emailLength}</p>
            {/* <label>
                <span>Email: </span>
                <input value={email} onChange={e => setEmail(e.target.value) } onKeyDown={e => e.key === 'Enter' ? //inputPasswordRef.current?.focus() : undefined} />
            </label> */}

	<InputLogin
	label='Email: '
	value={email}
	onChange={(newValue) => {setEmail(newValue)}}
	onPressEnter={() => inputPasswordRef.current?.focus()}
	 />

            {/* <label>
                <span>Senha: </span>
                <input type="password" ref={inputPasswordRef} value={password} onChange={e => setPassword(e.target.value) } />
            </label> */}

	<InputLogin
	label='Senha: '
	value={password}
	onChange={(newValue) => {setPassword(newValue)}}
	ref={inputPasswordRef}
	 />

            <button type="button" onClick={cliqueBotao} >
                Entrar
            </button>
        <button type='button' onClick={voltar}>Voltar</button>
        </form>
    </div>
    );
};

/*Terceira aula useMemo*/

