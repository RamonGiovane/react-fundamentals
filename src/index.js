import './index.css'
import ReactDom from "react-dom";
import React from "react";

import Primeiro from './components/basicos/Primeiro';

const rootEl = document.getElementById('root')
ReactDom.render(
  <div>
    <Primeiro></Primeiro>
  </div>,
  rootEl)