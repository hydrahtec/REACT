import {UsuarioLogadoProvider} from './shared/contexts';
import {Rotas} from './routes'

export const App = () => {
  return (
    <UsuarioLogadoProvider>
      <Rotas />
    </UsuarioLogadoProvider>
  );
}