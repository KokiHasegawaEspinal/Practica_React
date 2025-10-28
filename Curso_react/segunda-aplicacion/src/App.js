// Es aconsejable borrar la importacion del logo de REACT
// import logo from './logo.svg';
import './App.css';

// A las funciones de REACT dentro de este archivo se les denomina componentes
// Siempre hay un componente principal. En este caso es funtion App()
function App() {

  const elemento=<h1 className='centrar-titulo'>Hola alumnos</h1>
  const elemento2=suma(7,5);
  return <div><div>{elemento}</div><div>{elemento2}</div></div>
}

function suma(a,b){

  return a+b;
}

export default App;
