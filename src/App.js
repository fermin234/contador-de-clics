import './App.css';
import Boton from './components/Boton/Boton.jsx';
import Contador from './components/Contador/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numeroDeClics, setNumeroDeClics] = useState(0);

  const manejarClic = () => {
    setNumeroDeClics(numeroDeClics + 1);
  };

  const reiniciarContador = () => {
    setNumeroDeClics(0);
  };

  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1> Contador de clics</h1>
        <Contador 
        numeroDeClics={numeroDeClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
