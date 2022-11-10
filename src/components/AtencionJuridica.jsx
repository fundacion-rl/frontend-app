import React from "react";

const AtencionJuridica = () => {
  return (
    <>
      <div className="div-programas">
        <h2>Atención Juridica</h2>
      </div>

      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div >
            <img  className=" mx-5 py-2 " src="http://drive.google.com/uc?export=view&id=18Ee_n2dihRp7ky2Ji70pEQOEtli1oUba" alt="Atencion Juridica"/>
        </div>

        <div >
          <p className=" w-75 p-5 m-5 ">
            {" "}
            La fundación retorno a la libertad, en pro de la defensa de los
            derechos humanos , se fijo como objetivo facilitar el acceso a la
            justicia para aquellas personas que no cuentan con los recursos
            necesarios para acceder a un abogado que preste servicios legales de
            alta calidad, siendo accesible para todo tipo de población. Nuestro
            equipo de abogados cuenta con experiencia en diferentes áreas del
            derecho que nos permiten ofrecerle un panorama completo de su caso y
            guiarlo en los primeros pasos para la resolución de conflictos o
            conformación de actos legales.
          </p>
          <button className="btn btn-primary rounded-5 mx-5">Quiero más informacion</button>
        </div>
      </div>
    </>
  );
};

export default AtencionJuridica;
