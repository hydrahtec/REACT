import {useCallback, useEffect, useState} from 'react';

import {ITarefa, TarefasService} from '../../shared/services/api/tarefas/TarefasService';
import { ApiException } from '../../shared/services/api/ApiException';


export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa>([]);

    useEffect(() => {}, []);

    return (
        <div>
           
        </div>
    );
   
};