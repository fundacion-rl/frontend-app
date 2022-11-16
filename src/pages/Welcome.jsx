import React from 'react'
import BannerGlobalCompact from '../components/BannerGlobalCompact'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import '../styles/NavBar.css'
import '../styles/Hero.css'
import Bmenu from '../components/Bmenu'
import NuestrosProgramas from '../components/NuestrosProgramas'
import Estadisticas from '../components/Estadisticas'
import AtencionJuridica from '../components/AtencionJuridica'
import UltimasNoticias from '../components/UltimasNoticias'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'

function Welcome() {
  return (
    <>
      <div className='nav-div'>
        <Bmenu />
        <NavBar />

      </div>
      <div className='main-top'>
        <Hero />
        {/* <img className='img-hero' src="http://drive.google.com/uc?export=view&id=1F3B1jZDUek8w7PNUPyHsY_ddHj2FPT2G" alt="imgHero" /> */}
      </div>
      <BannerGlobalCompact />
      <NuestrosProgramas />
      <Estadisticas />
      <AtencionJuridica />
      <UltimasNoticias />
      <Sponsors />
      <Footer />
    </>
  )
}

export default Welcome