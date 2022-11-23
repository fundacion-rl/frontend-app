import React from "react";
import { useState } from "react";
import "../styles/Diagramas.css";

export default function ProgramasConsolidados() {
  const [btnSocial, setBtnSocial] = useState(false);
  const [btnDerechos, setBtnDerechos] = useState(false);
  const [btnCooperacion, setBtnCooperacion] = useState(false);
  const [btnSostenibilidad, setBtnSostenibilidad] = useState(false);

  const handleSocial = () => {
    setBtnSocial(!btnSocial);
  };

  const handleDerechos = () => {
    setBtnDerechos(!btnDerechos);
  };

  const handleCooperacion = () => {
    setBtnCooperacion(!btnCooperacion);
  };

  const handleSotenibilidad = () => {
    setBtnSostenibilidad(!btnSostenibilidad);
  };

  return (
    <div className="d-flex gap-5">
      <div className="div-single-container div-desplegable">
        <button
          onClick={handleSocial}
          className="div-dark bg-dark btn-desplegable "
        >
          INCLUSIÓN SOCIAL
        </button>
        {btnSocial ? (
          <div className="div-info-social">
            <h3>Todos Somos RETOLIBERTAD</h3>
            <p className="text-dark">
              Intervención Psicosocial Atención Jurídica Promoción, prevención y
              atención en salud (física y emocional) Generación de Ingresos.
            </p>
            <button className="btn btn-primary">
              <a
                className="text-light text-decoration-none"
                href="#retolibertad"
              >
                Ver más
              </a>
            </button>
          </div>
        ) : null}
      </div>
      <div className="div-single-container div-desplegable">
        <button
          onClick={handleDerechos}
          className="div-dark bg-dark btn-desplegable "
        >
          DERECHOS HUMANOS
        </button>
        {btnDerechos ? (
          <div className="div-info-derechos">
            <h3>Realidad para el Cambio</h3>
            <p className="text-dark">
              Observatorio Carcelario Incidencia Política Formación de
              Liderazgo.
            </p>
            <button className="btn btn-primary">
              <a
                className="text-light text-decoration-none"
                href="#derechosHumanos"
              >
                Ver más
              </a>
            </button>
          </div>
        ) : null}
      </div>
      <div className="div-single-container div-desplegable">
        <button
          onClick={handleCooperacion}
          className="div-dark bg-dark btn-desplegable "
        >
          COOPERACIÓN INTERNACIONAL
        </button>
        {btnCooperacion ? (
          <div className="div-info-coop">
            <h3>Libertad sin Fronteras</h3>
            <p className="text-dark">
              Gestión del Conocimiento Articulación Internacional.
            </p>
            <button className="btn btn-primary">
              <a
                className="text-light text-decoration-none"
                href="#cooperacion"
              >
                Ver más
              </a>
            </button>
          </div>
        ) : null}
      </div>
      <div className="div-single-container div-desplegable">
        <button
          onClick={handleSotenibilidad}
          className="div-dark bg-dark btn-desplegable "
        >
          SOTENIBILIDAD
        </button>
        {btnSostenibilidad ? (
          <div className="div-info-sostenibilidad">
            <h3 className="px-5" >Brazos Abiertos  </h3>
            <p className="text-dark">
              Estrategias de Recaudo Gestión Interinstitucional Proyectos de
              Inversión.
            </p>
            <button className="btn btn-primary">
              <a
                className="text-light text-decoration-none"
                href="#brazosAbiertos"
              >
                Ver más
              </a>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
