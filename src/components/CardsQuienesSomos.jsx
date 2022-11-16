import React from "react";
import '../styles/Resena.css'

export default function CardsQuienesSomos() {
  return (
    <>
      <div className="container div-cultura div-cultura-organizacional my-5">
        <img
          src="http://drive.google.com/uc?export=view&id=1ogFljxZdfT8Vynke5ACE2M8XgF76CLv4"
          alt="cultura"
        />

        <div className="text-mision">
          <h3>Misión</h3>
          <p className="text-dark">
            Somos una Fundación que propende por la defensa y el goce efectivo
            de los derechos humanos y el bienestar integral de las personas
            privadas de la libertad, sus núcleos familiares, migrantes y
            población en condición de vulnerabilidad a nivel nacional e
            internacional para un retorno digno e incluyente a la sociedad.
          </p>
        </div>
        <div className="text-mision">
          <h3>Visión</h3>
          <p className="text-dark">
            Para el año 2025, ser reconocidos como punto de referencia en el
            ámbito político y de defensa de los derechos humanos en pro de la
            población privada de la libertad, migrantes y población vulnerable,
            con una amplia cobertura a nivel nacional e internacional, a través
            de la consolidación de la red Retolibertad.
          </p>
        </div>
      </div>
      <div className="container div-cultura my-5">
        <div className="text-mision">
          <h3>Principios</h3>
            <ul className="text-card-valores">
                <li><strong className="initial-letter">L</strong>ibre de toda influencia</li>
                <li><strong className="initial-letter">I</strong>gnorando las fronteras</li>
                <li><strong className="initial-letter">B</strong>uscando la unión</li>
                <li><strong className="initial-letter">E</strong>strechamos nuestras manos</li>
                <li><strong className="initial-letter">R</strong>eunidos como hermanos</li>
                <li><strong className="initial-letter">T</strong>rabajaremos por un mundo de</li>
                <li><strong className="initial-letter">A</strong>mor y amistad</li>
                <li><strong className="initial-letter">D</strong>onde exista la libertad.</li>
            </ul>

        </div>
        <div className="text-mision">
          <h3>Valores</h3>
          <ul className="text-card-valores">
                <li><strong className="initial-letter">Amor</strong>, por sí mismo, por el otro.</li>
                <li><strong className="initial-letter">Dignidad</strong>, reconocer unos a otros como seres humanos.</li>
                <li><strong className="initial-letter">Respeto</strong> en la diversidad. </li>
                <li><strong className="initial-letter">Tolerancia</strong> en las diferencias.</li>
                <li><strong className="initial-letter">Honestidad</strong>, actuando con rectitud y transparencia.</li>
                <li><strong className="initial-letter">Disciplina</strong>, para el desarrollo de programas y proyectose</li>
                <li><strong className="initial-letter">Corresponsabilidad</strong> de los privados de la libertad, sus familias y la Fundación.</li>
                <li><strong className="initial-letter">Vigías</strong>, observamos e intervenimos.</li>
            </ul>
        </div>
        <img
          src="http://drive.google.com/uc?export=view&id=1ospogZ9544rOV2OyhXl4oSej9SniJmfs"
          alt="Mensaje"
        />
      </div>
    </>
  );
}
