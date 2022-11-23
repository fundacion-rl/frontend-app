import React from 'react'
import DiagramaProgramas from '../components/DiagramaProgramas'
import ProgramasInstitucionales from '../components/ProgramasInstitucionales'
import Layout from '../layout/Layout'

export default function Programas() {
  return (
    <Layout>
      <img
        src="http://drive.google.com/uc?export=view&id=1hiqneTh8ZTGZ0whkXtSc2nptJ-BIsFHS"
        alt="nuestraFundacion"
        className="img-nuestra-fundacion"
      />
      <div className="div-programas">
        <h2>Programas Institucionales</h2>
      </div>
      <ProgramasInstitucionales/>

      <br/>
      <DiagramaProgramas/>
      <br/>
      <br/>
      <br/>
      <br/>

    </Layout>
  )
}
