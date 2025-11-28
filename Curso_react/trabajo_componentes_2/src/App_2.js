import logo from './logo.svg';
import './App.css';
import Usuario from './components/usuario';

function App() {
  return (
    <div >
      <Saludo destinatario=" Alumnos"></Saludo>
    </div>
  );
}

function Saludo(props){

  return <h1>Hola {props.destinatario}!!!</h1>


}

//export default App;
