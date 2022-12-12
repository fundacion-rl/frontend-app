import React from 'react'
import '../styles/Diagramas.css'
import ProgramasConsolidados from './ProgramasConsolidados'

export default function DiagramaProgramas() {
  return (
    <div className='div-container container py-5'>
        <div className='div-single-container'>
            <p className='div-blue'>DERECHOS HUMANOS</p>
        </div>
        <div className='div-multiple-container d-flex'>
            <p className='div-blue'>INTERVENCIÓN SOCIAL</p>
            <p className='div-dark  bg-dark'>ÁREAS DE GESTIÓN</p>
            <p className='div-blue'>COOPERACIÓN INTERNACIONAL</p>
        </div>
        <div className='div-single-container'>
            <p className='div-blue'>SOSTENIBILIDAD Y PRESENTACIÓN DE INICIATIVAS</p>
        </div>
        <div className='div-single-container'> 
            <p className='div-dark bg-dark'>PROGRAMAS INSTITUCIONALES</p>
        </div>
            <ProgramasConsolidados/>
    </div>
  )
}
