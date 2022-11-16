import React from "react";
import BanderaDiv from "../components/BanderaDiv";
import CardsQuienesSomos from "../components/CardsQuienesSomos";
import ObjetivoGeneral from "../components/ObjetivoGeneral";
import Resena from "../components/Resena";
import Layout from "../layout/Layout";
import "../styles/QuienesSomos.css";

export default function QuienesSomos() {
  return (
    <Layout>
      <img
        src="http://drive.google.com/uc?export=view&id=1hiqneTh8ZTGZ0whkXtSc2nptJ-BIsFHS"
        alt="nuestraFundacion"
        className="img-nuestra-fundacion"
      />
      <div className="div-programas">
        <h2>Nuestra Fundación</h2>
      </div>
      <Resena />
      <BanderaDiv />
      <CardsQuienesSomos />
      <div className="div-programas">
        <h2>Objetivo General</h2>
      </div>
      <ObjetivoGeneral/>
    </Layout>
  );
}
