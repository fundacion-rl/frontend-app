import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import '../styles/NavBar.css'

function NavBar() {
    const NavArray = [
        {
            id: "_quienessomos",
            to: "/quienessomos",
            title: "Quienes Somos"
        },
        {
            id: "_proyectos",
            to: "/proyectos",
            title: "Proyectos"
        },
        {
            id: "_programas",
            to: "/programas",
            title: "Programas"
        },
        {
            id: "_donaciones",
            to: "/donaciones",
            title: "Donaciones"
        },
        {
            id: "_contacto",
            to: "/contacto",
            title: "Contacto"
        },
    ]


    return (
        <div className='Nav-container'>
            {NavArray.map((link) => (
                <LinkRouter className="navlink btn-grad" to={link.to} key={link.id}>
                    {link.title}
                </LinkRouter>
            ))}
            
        </div>
    )
}

export default NavBar