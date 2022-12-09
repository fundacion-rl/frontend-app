import React from "react";
import "../styles/GlobalCompact.css";
import unGlobalCompactIMG from '../assets/globalCompactLogo.png'

export default function BannerGlobalCompact() {
  return (
    <div className="div-BannerGlobal">
      <div className="container d-flex align-items-center div-container-global-compact">
      <a
        className="globalCompact-Logo"
        href="https://www.unglobalcompact.org"
        target="_blank" rel="noreferrer"
      >
        {/* <img
          src="http://drive.google.com/uc?export=view&id=1sCwN7yvgbwhr_qEM2ZOvV1WzVwhGaC15"
          alt="global compact UN"
        /> */}
                <img
          src={unGlobalCompactIMG}
          alt="global compact UN"
          className="img-global-compact"
        />
      </a>

      <p>
        “Desde el 2020, la{" "}
        <strong className="text-strong">Fundación Retorno a la Libertad</strong>,
        se ha comprometido con las iniciativas de responsabilidad corporativa
        del Pacto Mundial de las Naciones Unidas y sus principios en las áreas
        de derechos humanos, empleo, medio ambiente, progreso social, mejorar el
        nivel de vida de los ciudadanos y la lucha contra la corrupción.”
      </p>
      </div>
    </div>
  );
}
