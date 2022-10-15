import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al aprendizaje en react!!!
        </p>

        {/* Cargar mi primer componente */}
        <MiComponente />
      </header>
    </div>
  );
}

export default App;
