import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComponenteComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragmento></Fragmento>
    <ComParametro
      titulo="Segundo componente"
      aluno="Ramon" nota={9.3}>
    </ComParametro>
    <Primeiro></Primeiro>
  </div>
);
