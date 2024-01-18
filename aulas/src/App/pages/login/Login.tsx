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

export const Login = () => {
   
   
    return (
        <div>
            <form>
                <label>
                    <span>Email: </span>
                    <input />
                </label>

                <label>
                    <span>Senha: </span>
                    <input type="password" />
                </label>

                <button type="button" >
                    Entrar
                </button>
            </form>
        </div>
    );
};