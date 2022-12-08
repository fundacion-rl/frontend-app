import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/NavBar.css";
import UI from '../components/UI'

function NavBar() {
  const NavArray = [
    {
      id: "Inicio",
      to: "/",
      title: "Inicio",
    },
    {
      id: "_quienessomos",
      to: "/quienessomos",
      title: "Quiénes Somos",
    },
    {
      id: "_proyectos",
      to: "/proyectos",
      title: "Proyectos",
    },
    {
      id: "_programas",
      to: "/programas",
      title: "Programas",
    },
    {
      id: "_documentos",
      to: "/docs",
      title: "Documentos",
    },
    {
      id: "_contacto",
      to: "/contacto",
      title: "Contacto",
    },
    {
      id: "_donaciones",
      to: "/donaciones",
      title: "Donaciones",
    },

  ];

  return (
    <div className="Nav-container">
      {NavArray.map((link) => (
        <LinkRouter className="navlink btn-grad" to={link.to} key={link.id}>
          {link.title}
        </LinkRouter>
      ))}
      <UI />
    </div>
  );
}

export default NavBar;
