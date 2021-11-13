import React from "react";

export default props => {
  const { min, max } = props
  return( 
    <div>
      <h2>Número aleatório</h2>
      <p>
        Min: { min }
      </p>

      <p>
        Max: { max }
      </p>
      
      <p>
        Gerado: { randomInt(min, max) }
      </p>
    </div>
  )
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}