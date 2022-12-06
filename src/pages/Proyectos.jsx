import React from 'react'
import AreasDeGestion from '../components/AreasDeGestion'
import ComponentesDeGestion from '../components/ComponentesDeGestion'
import TresEjes from '../components/TresEjes'
import Layout from '../layout/Layout'

export default function Proyectos() {
  return (
    <Layout>
    <img
      src="http://drive.google.com/uc?export=view&id=1hiqneTh8ZTGZ0whkXtSc2nptJ-BIsFHS"
      alt="nuestraFundacion"
      className="img-nuestra-fundacion"
    />
    <div className="div-programas">
      <h2>Plan Estratégico</h2>
    </div>
    <ComponentesDeGestion/>
    <TresEjes/>
    <AreasDeGestion/>

    <br/>
  </Layout>
  )
}
