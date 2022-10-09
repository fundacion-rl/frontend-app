import logo from './logoFundacion.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicativo web: Fundacion Retorno a la Libertad "En construcción"
        </p>
        <a
          className="App-link"
          href="https://fundacionretornoalalibertad.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitio Web
        </a>
      </header>
    </div>
  );
}

export default App;
