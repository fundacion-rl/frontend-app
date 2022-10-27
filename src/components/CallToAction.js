import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Hero.css'

export default function CallToAction() {

  return ( 
    <div className='actionContainer'>
        <img src="http://drive.google.com/uc?export=view&id=1cOIjoKl_e3R8YhJXdbnQr4lDxfdFS-ws" alt="logoFundacion"/>
        <p>Somos una fundación que busca ayudar a los internos colombianos y extranjeros en la parte resocialización, acompañamiento jurídico, servicio médico y psicológico, entre otros </p>
        <LinkRouter to="#" className='action-Button'> DONACIONES</LinkRouter>
    </div>
  )
}
