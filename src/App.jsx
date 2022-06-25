import React, { useState } from 'react';


import Teclado from './components/Teclado.jsx';

import Pantalla from './components/Pantalla.jsx';

import { calcular } from './utilities/cacular.js';

function App() {
  // const [resultado, setResultado] = useState("");
  // const [operacion, setOperacion] = useState("");
  // const [numero1, setNumero1] = useState("");
  // const [numero2, setNumero2] = useState("");
  // const [rest, setRest] = useState(false);

  // const onClick = (e) => {
  //   const valor = e.target.innerHTML;

  //   if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
  //     setOperacion(valor);
  //   } else if (valor === '=') {
  //     // alert(numero1 + operacion + numero2 + " = " + calcular(operacion, numero1, numero2));

  //     setResultado(parseInt(calcular(operacion, numero1, numero2)));
  //     setNumero1('');
  //     setNumero2('');
  //     setOperacion('');
  //   } else if (numero1 === "") {
  //     setRest(false);
  //     setNumero1(parseInt(valor));

  //   } else if (numero2 === "") {
  //     setNumero2(parseInt(valor));
  //   } else if (valor === 'c') {
  //     setRest(true);
  //     setResultado('');
  //     setNumero1('');
  //     setNumero2('');
  //     setOperacion('');
  //   }
  // }








  return (
    <div>
      <h1>Calculadora simple de dos numeros</h1>
      <div >
        {/* <Pantalla resultado={resultado} operacion={operacion} numero1={numero1} numero2={numero2} onClick={onClick} rest={rest} />
        <Teclado onClick={onClick} /> */}
      </div>
    </div>
  );
}

export default App;


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;

//   h1 {
//     color: #fff;
  
//     font-weight: bold;
//   }
// `;


// const Calculadora = styled.div`
  
//   display: flex; 
//   flex-direction: column;
//   width: 600px;
//   height: 650px; 
//   border: none;


//   //overflow: hidden;

//   border-radius: 60px;
//   background: #8BC6EC;
//   box-shadow:  10px -10px 20px #72a2c2, -10px 10px 20px #a4eaff, 10px -10px 20px #a4eaff, -10px 10px 20px #72a2c2;
  
// `;