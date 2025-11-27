import logo from './logo.svg';
import './App.css';

function App() {

const miArray=()=>{

  //const numerosArray=[15,37,26,95,81]
  const numerosArray=[
    {id:1, numero:15},
    {id:2, numero:37},
    {id:3, numero:26},
    {id:4, numero:95},
    {id:5, numero:81},




  ];

  //========================= Metodo simple para llamar al array ======================================
  //return(

    //<p>{numerosArray.map((numero,index)=>{
      //return <span key={index}>&nbsp;Valor del Key: {index}&nbsp; valor del array: {numero&nbsp;</span>
      //&nbsp;  =  no break space ... sirve para dar un espacio entre palabras
    //})}</p>
  //============================================ FIN ===================================================
  
  //======================== Metodo usando un ID para cada clave =======================================
  //return(
    //<p>{numerosArray.map((item)=>{   
      //return <span key={item.id}>&nbsp;valor del Key: {item.id}&nbsp; Valor del array: {item.id}</span>
    //})}</p>
  //============================================== FIN =================================================  
      
  return (
      <div>
        {numerosArray.map((item, index) => (
          <p key={item.id}>
            {index + 1}. Valor del key: {item.id} ➡ Valor del número: {item.numero}
          </p>
        ))}
      </div>
    );
  }; 
      

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Numeros del array</h1>
        {miArray()}
      </header>
    </div>
  );
}

export default App;
