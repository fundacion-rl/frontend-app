import React from 'react'
import '../styles/NuestrosProgramas.css'

function ProgramasCard(props) {

  return (
    <div id={props.id} className='card-programa'>
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
    </div>
  )
}

export default ProgramasCard