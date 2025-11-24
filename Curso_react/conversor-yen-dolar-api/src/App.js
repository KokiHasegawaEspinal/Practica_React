import logo from './logo.svg';
import './App.css';

import {useRef, useState, useEffect} from 'react';

function App() {
  
  const[valorCambio, setvalorcambio]=useState(null);

  const eurosRef=useRef();

  const resultadoRef=useRef();

  useEffect(()=>{

    const llamaApiCambio=async()=>{

        try{
          const respuesta=await fetch(" https://v6.exchangerate-api.com/v6/e2a67f1ddb794a165c602cce/latest/USD");

          const datos=await respuesta.json();

          console.log(datos);

          setvalorcambio(datos.conversion_rates.JPY);


        }catch(error){
            console.error("Error al acceder a la API: ", error);

        }
            
        
    };

    llamaApiCambio();

  }, []);

  const calcular=()=>{

    const eurosValor=parseFloat(eurosRef.current.value);

    const dolares=eurosValor*valorCambio;

    const formateado=dolares.toLocaleString("en-US"); // ➡ "62,662.72"

    //resultadoRef.current.innerHTML="￥" + dolares.toFixed(2);
    resultadoRef.current.innerHTML="￥" + formateado;

  };
  
  return <div>
    <div className='cajaPrincipal'>
              <h1>Conversor Dolar - Yen</h1>
              <div className='input-container'>
                <span className='currency'>$</span>
                <input className='centrarElementos' type='text' ref={eurosRef}></input><br/>
              </div>
              <button className='centrarElementos' onClick={calcular}>Convertir</button><br/>
              <div className='centrarElementos resultado' ref={resultadoRef}></div>

    </div>
  </div>
}

export default App;
