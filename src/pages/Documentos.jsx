import React from "react";
import Docs from "../components/Docs";
import Layout from "../layout/Layout";
import '../styles/Docs.css'

export default function Documentos() {
  return (
    <Layout>
      <img
        src="http://drive.google.com/uc?export=view&id=1hiqneTh8ZTGZ0whkXtSc2nptJ-BIsFHS"
        alt="nuestraFundacion"
        className="img-nuestra-fundacion"
      />
      <div className="div-logo-light-tablet">
      <img
        src="http://drive.google.com/uc?export=view&id=1GtSiMBWiCxshS0U3pN62ZQTQ9RyUmSM9"
        alt="logoFundacion"
        className="logo-light"
      />
      </div>

      <div className="div-programas">
        <h2>Documentación</h2>
      </div>
      <Docs />
    </Layout>
  );
}
