import React from "react"

export default function(props){
  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  // props.nota = Math.ceil(props.nota) -> dispara erro. Propriedades sao readonly!!
  const arredondada = Math.ceil(props.nota) // funciona!
  return(
    <div>
        <h2>{ props.titulo }</h2>
        <p>
          { props.aluno } tem nota { arredondada } e foi <strong>{ status }</strong>
        </p> 
    </div>
  )
}