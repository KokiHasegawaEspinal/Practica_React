import logo from './logo.svg';
import './App.css';
import { MiBoton } from './styled';

function App() {
  return (
    <div className="App">
     
      <MiBoton entrar={true}>Entrar</MiBoton>
      <MiBoton salir={false}>Salir</MiBoton>
    </div>
  );
}

export default App;
