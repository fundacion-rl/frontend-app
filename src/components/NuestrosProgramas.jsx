import React from "react";
import '../styles/NuestrosProgramas.css'
import ProgramasCard from "./ProgramasCard";

const NuestrosProgramas = ()=>{



  const arrayProgramas = [
        {
            id:"01",
            img:"http://drive.google.com/uc?export=view&id=1mZrMYq5zX-oeIIQtNlWFrumYyTC7qRKh",
            title: "Todos somos RetoLibertad"
        },
        {
            id:"02",
            img:"http://drive.google.com/uc?export=view&id=1-XrWvJYksNRMFWUKH5N3Es9K5Vr5gCgy",
            title: "Realidad para el Cambio"
        },
        {
            id:"03",
            img:"http://drive.google.com/uc?export=view&id=1JnN5XqFkWn5TCguzzkJCWaHYjD3poAau",
            title: "Libertad sin Fronteras"
        },
        {
            id:"04",
            img:"http://drive.google.com/uc?export=view&id=1eCmwU4BVzJzyrDR0ObLGjeMyS_rcBrk7",
            title: "Brazos Abiertos"
        },
    ]


    return(
        <>
        <div className="div-programas">
            <h2>Nuestros Programas</h2>
        </div>

        <div className="div-cards">
        {
            arrayProgramas.map((item)=> <ProgramasCard key={item.id} img={item.img} title={item.title} id={item.id} /> )
        }
        </div>
        
        </>
    )
}

export default NuestrosProgramas;