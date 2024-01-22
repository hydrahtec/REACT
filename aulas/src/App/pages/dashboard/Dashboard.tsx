import {Link} from 'react-router-dom';
import { useRef } from 'react';

export const Dashboard = () => {
    const countRef = useRef({count : 0});


    return (
        <div>
            <p>Dashboard</p>

            <p>Contador: {countRef.current.count}</p>
            <button onClick={() => countRef.current.count++}>Somar</button>
            <Link to="/entrar">Login</ Link>
        </div>
    );
   
};