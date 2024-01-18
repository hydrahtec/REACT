import { useNavigate } from "react-router-dom";

export const Login = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/pagina-inicial") ;
    }


    return (
        <div>
        <p>Entrar: </p>
        <button onClick={handleClick}>Página principal</button>
        </div>
    );
};