import logo from './logo.svg';
import './App.css';
import { MiBoton } from './styled';
import { MiBotonLargo } from './styled2';
import { MiBotonLargoAmarillo } from './styled3';

function App() {
  return (
    <div className="App">
     
      <MiBoton>Entrar</MiBoton>
      <MiBotonLargo>Salir</MiBotonLargo>
      <MiBotonLargoAmarillo>Pulsar</MiBotonLargoAmarillo>


    </div>
  );
}

export default App;
