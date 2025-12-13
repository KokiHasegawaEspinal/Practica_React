import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types"
import "prop-types/checkPropTypes";

function App() {

    const usuario={
      nombre: "Jorge",
      apellido:"Hasegawa",
      edad: "44",
      //genero:"masculino"
    }

  return (
    <div >
      <Saludo usuario={usuario}></Saludo>
    </div>
  );
}
//{props.usuario.nombre && (<h1>Hola  {props.usuario.nombre} {props.usuario.apellido}!!!</h1>)}
function Saludo(props){

  return (
    <div>
      {props.usuario.nombre && props.usuario.apellido && props.usuario.edad && props.usuario.genero ? (<div><h1>Hola  {props.usuario.nombre} {props.usuario.apellido}!!!</h1>
      <p>Tu edad es: <strong>{props.usuario.edad}</strong> años</p>
      <p>y tu genero es: <strong>{props.usuario.genero}</strong></p>
    </div>):
    <h1>Se mostrara el contenido si ingresas todos los datos.</h1>}</div>
  );

}

Saludo.propTypes={

  usuario:PropTypes.shape(

    {

      nombre:PropTypes.string.isRequired,
      edad:PropTypes.number.isRequired

    }

  ).isRequired

}

export default App;
