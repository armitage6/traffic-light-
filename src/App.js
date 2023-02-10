import { useState } from 'react';
import './App.css';

function App() {
  let [sombra, setSombra] = useState("green")



  return <div className='contenedor'>
    <div className='d-flex justify-content-center'>
        <div className='contenedor-palo'></div>
    </div>
    <div className='contenedor-semaforo'>
      
    <span onClick={() => setSombra("red")} className={sombra === "red" ? "sombra-luz" : ""}  type="button" id='auida1'></span>
    <span onClick={() => setSombra("orenge")} className={sombra === "orenge" ? "sombra-luz" : ""}  type="button" id='auida2'></span>
    <span onClick={() => setSombra("green")} className={sombra === "green" ? "sombra-luz" : ""}  type="button" id='auida3'></span>
    
    </div>
    
  </div>
}

export default App;
