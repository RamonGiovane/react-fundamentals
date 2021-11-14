import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComponenteComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

const app = _ => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <div id="cards">
      <Card titulo="#04 - Valor Aleatório">
        <Aleatorio min={1} max={100} />
      </Card>

      <Card titulo="#03 - React Fragment">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="#02 - Componente com Parâmetro">
        <ComParametro
          titulo="Segundo componente"
          aluno="Ramon" nota={9.3}>
        </ComParametro>
      </Card>

      <Card titulo="#01 - Primeiro componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

export default app;