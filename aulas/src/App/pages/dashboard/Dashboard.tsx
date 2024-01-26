import {useCallback, useContext, useEffect, useState} from 'react';

import {ITarefa, TarefasService} from '../../shared/services/api/tarefas/TarefasService';
import { ApiException } from '../../shared/services/api/ApiException';


interface IListeItem {
    title: string;
    isSelected: boolean;
}

export const Dashboard = () => {
    const [lista, setLista] = useState<IListeItem[]>([]);


    useEffect(() => {}, []);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;
            
            const value = e.currentTarget.value;
            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.some(ListItem => ListItem.title === value)) return oldLista;
                
                return [...oldLista, 
                {
                    title: value,
                    isSelected: false,
                }
                ];
            });
        }
    }, []);

    return (
        <div>
         <p>Lista</p> 
        
        <input placeholder='Digite o proximo nome: '
            onKeyDown={handleInputKeyDown}
        />
        <p>{lista.filter((ListItem) => ListItem.isSelected).length}</p>

         <ul>
            {lista.map((ListItem) => {
                return <li key={ListItem.title}>
                    <input type="checkbox" name="Selected" id="Selected" placeholder='Selecione' 
                    checked={ListItem.isSelected}
                    onChange={() => {
                        setLista(oldList => {
                            return oldList.map(oldListItem => {
                                const newIsSelected = oldListItem.title === ListItem.title ? !oldListItem.isSelected : oldListItem.isSelected;
                                return {
                                  ...ListItem,
                                    isSelected: newIsSelected,
                                };
                            });
                        })
                    }} />
                    {ListItem.title}
                    </li>
            })}
         </ul>
        </div>
    );
};