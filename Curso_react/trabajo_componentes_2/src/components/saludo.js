import logo from './logo.svg';
import './App.css';
    function App() { 
        const usuario={ 
            nombre:"Jorge", 
            apellido:"Hasegawa", 
            edad: 44, 
            genero: "masculino" 
        } 
    
        return ( 
            <div> 
                <Saludo usuario={usuario}></Saludo> 
            </div> 
        ); 
    } 
    
    function Saludo(props){ 
        return<div> 
            <h1>Hola {props.usuario.nombre} {props.usuario.apellido}!!</h1>
            <h1>Tu edad es <strong>{props.usuario.edad}</strong> años</h1>
            <h1>y tu genero es <strong>{props.usuario.genero}</strong></h1>
        </div> 
    } 
    
export default usuario;