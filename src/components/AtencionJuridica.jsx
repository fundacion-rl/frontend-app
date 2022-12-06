import React from "react";
import '../styles/AtencionJuridica.css';
const AtencionJuridica = () => {
  return (
    <>
      <div className="div-programas">
        <h2>Atención Jurídica</h2>
      </div>

      <div className="div-atencion flex-wrap w-100">

            <img  className="img-atencion" src="http://drive.google.com/uc?export=view&id=18Ee_n2dihRp7ky2Ji70pEQOEtli1oUba" alt="Atencion Juridica"/>


        <div className=" div-text-atencion d-flex flex-column py-2" >
          <p className=" text-atencion w-100">
            {" "} <strong >La Fundación Retorno a la Libertad</strong>, en pro de la defensa de los
            derechos humanos, se fijó como objetivo facilitar el acceso a la
            justicia para aquellas personas que no cuentan con los recursos
            necesarios para acceder a un abogado que preste servicios legales de
            alta calidad, siendo accesible para todo tipo de población. 
            </p>
            <p className=" text-atencion w-100">
            Nuestro <strong>Equipo de Abogados</strong>  cuenta con experiencia en diferentes áreas del
            derecho que nos permiten ofrecerle un panorama completo de su caso y
            guiarlo en los primeros pasos para la resolución de conflictos o
            conformación de actos legales.
          </p>
          <button className="action-Button w-30 align-self-end btn-information">Quiero más información</button>
        </div>
      </div>
    </>
  );
};

export default AtencionJuridica;
