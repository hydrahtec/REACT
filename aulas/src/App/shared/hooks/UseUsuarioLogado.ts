import {useContext} from 'react';

import {UsuarioLogadoContext} from '../contects';

export const useUsuarioLogado = () => {
	const context = useContext(UsuarioLogadoContext);
	return context;
};