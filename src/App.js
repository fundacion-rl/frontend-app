import logo from './logoFundacion.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import QuienesSomos from './pages/QuienesSomos';
import Programas from './pages/Programas';
import Proyectos from './pages/Proyectos';
import Documentos from './pages/Documentos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/quienessomos' element={<QuienesSomos/>}/>
      <Route path='/programas' element={<Programas/>}/>
      <Route path='/proyectos' element={<Proyectos/>}/>
      <Route path='/docs' element={<Documentos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
