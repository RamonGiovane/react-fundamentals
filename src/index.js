import './index.css'
import ReactDom from "react-dom";
import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComponenteComParametro';

const rootEl = document.getElementById('root')
ReactDom.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro 
        titulo="Segundo componente" 
        aluno="Ramon" nota={9.3}>    
    </ComParametro>
  </div>,
  rootEl)