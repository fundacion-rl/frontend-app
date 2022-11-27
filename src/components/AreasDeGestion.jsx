import React from "react";

export default function AreasDeGestion() {
  return (
    <>
      <div className="div-programas">
        <h2>ÁREAS DE GESTION</h2>
      </div>
      <p className="p-resena text-dark container py-5">
        Las áreas de gestión: para su construcción se toman en cuenta los
        objetivos específicos institucionales, desarrollando una estrategia
        metodológica que permita el cumplimiento a cabalidad de dichos objetivos
      </p>
      <div className="container div-tres-ejes pt-5 div-componentes-gestion">
        <hr />
        <div className="div-tres-ejes-texto p-resena p-5">
          <h4>COMPONENTES DE GESTIÓN</h4>
          <p className="text-dark py-5">
            Los componentes estratégicos: estos componentes comprenden
            dimensiones especificas enmarcadas en el planteamiento general del
            desarrollo humano, convirtiéndose así en la herramienta fundamental
            para la elaboración de los proyectos internos para el
            restablecimiento de derechos y el mejoramiento en la calidad de vida
            de nuestros beneficiarios.
          </p>
        </div>
        <img
          className="img-componentes-gestion"
          src="http://drive.google.com/uc?export=view&id=1TPcHQuXxDOYDQ4MvZn9yidYHiIX4WUyP"
          alt="3ejes"
        />
      </div>
    </>
  );
}
