import logo from './logo.svg';
import './App.css';
import Usuario from './components/usuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Usuario></Usuario>
      </header>
    </div>
  );
}

//export default App;
