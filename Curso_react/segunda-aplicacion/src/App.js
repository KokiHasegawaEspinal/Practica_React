// Es aconsejable borrar la importacion del logo de REACT
// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

// A las funciones de REACT dentro de este archivo se les denomina componentes
// Siempre hay un componente principal. En este caso es funtion App()
function App() {

  // definir el estado para almacenar el resultado de  la suma

  // null hace que el resulttado aparezca cuando haga click. Es decir que no parezca desde el inicio
  const [resultado, setResultado] = useState(null);

  const elemento=<h1 className='centrar-titulo'>Hola alumnos</h1>
  // const elemento2=<h2 className='centrar-titulo'>{suma(7,5)}{/*El codigo JSX siempre debe ir entre llaves*/}</h2>

  const botonPulsado=()=>{

    const result=suma(10,10);

    setResultado(result);


  };

  // {resultado!=null => Hace que todo el texto aparezca cuando se pulse el boton
  return <div>
      <button onClick={botonPulsado} style={{marginTop: "20px", marginLeft: "20px"}}>Pulsame</button>
      <div>{elemento}</div>
      <div>{resultado!=null && <h2 >El resultado es: {resultado}</h2>}</div>
    </div>
}

const botonPulsado=()=>{

  alert(suma(7,5));
}

function suma(a,b){

  return a+b;
}

export default App;
