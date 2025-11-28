import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types"
import "prop-types/checkPropTypes";

function App() {

    const usuario={
     
      apellido:"Hasegawa",
      edad: "44",
      genero:"masculino"
    }

  return (
    <div >
      <Saludo usuario={usuario}></Saludo>
    </div>
  );
}

function Saludo(props){

  return (
    <div>
      <h1>Hola  {props.usuario.apellido}!!!</h1>
      <p>Tu edad es: <strong>{props.usuario.edad}</strong> años</p>
      <p>y tu genero es: <strong>{props.usuario.genero}</strong></p>
    </div>
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
