import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import '../styles/NavBar.css'

function UI() {



    return (
        <div className='Nav-container UI'>
            <LinkRouter className="UI-link" >
                INGRESAR
            </LinkRouter>
        </div>
    )
}

export default UI