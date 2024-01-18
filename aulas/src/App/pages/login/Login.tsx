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

import {useState} from 'react';

export const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
 const cliqueBotao = () => {
    console.log(email);
    console.log(password);
 };

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
        </form>
    </div>
    );
};