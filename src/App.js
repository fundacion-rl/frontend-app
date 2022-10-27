import logo from './logoFundacion.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
        
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Aplicativo web: Fundacion Retorno a la Libertad "En construcción"
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://fundacionretornoalalibertad.org/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Sitio Web
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
