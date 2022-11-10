import React from "react";
import '../styles/AtencionJuridica.css';
const AtencionJuridica = () => {
  return (
    <>
      <div className="div-programas">
        <h2>Atención Juridica</h2>
      </div>

      <div className="div-atencion flex-wrap">
        <div >
            <img  className="py-5" src="http://drive.google.com/uc?export=view&id=18Ee_n2dihRp7ky2Ji70pEQOEtli1oUba" alt="Atencion Juridica"/>
        </div>

        <div className=" w-50 d-flex flex-column py-2" >
          <p className=" text-atencion w-100">
            {" "} <strong >La fundación retorno a la libertad</strong>, en pro de la defensa de los
            derechos humanos , se fijo como objetivo facilitar el acceso a la
            justicia para aquellas personas que no cuentan con los recursos
            necesarios para acceder a un abogado que preste servicios legales de
            alta calidad, siendo accesible para todo tipo de población. 
            </p>
            <p className=" text-atencion w-100">
            Nuestro <strong>equipo de abogados</strong>  cuenta con experiencia en diferentes áreas del
            derecho que nos permiten ofrecerle un panorama completo de su caso y
            guiarlo en los primeros pasos para la resolución de conflictos o
            conformación de actos legales.
          </p>
          <button className="btn btn-primary rounded-5 mx-5 w-30 align-self-end">Quiero más informacion</button>
        </div>
      </div>
    </>
  );
};

export default AtencionJuridica;
