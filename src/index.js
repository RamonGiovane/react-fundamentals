import './index.css'
import ReactDom from "react-dom";
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComponenteComParametro';
import Fragmento from './components/basicos/Fragmento';

const rootEl = document.getElementById('root')
ReactDom.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro 
        titulo="Segundo componente" 
        aluno="Ramon" nota={9.3}>    
    </ComParametro>
    <Fragmento></Fragmento>
  </div>,
  rootEl)