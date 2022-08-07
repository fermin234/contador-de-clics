import React from "react";
import './Contador.css';

function Contador ({ numeroDeClics }) {
  return (
    <div className='contador'>
      {numeroDeClics}
    </div>
  );
}

export default Contador;