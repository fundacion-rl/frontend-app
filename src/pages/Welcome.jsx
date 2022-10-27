import React from 'react'
import BannerGlobalCompact from '../components/BannerGlobalCompact'
import NavBar from '../components/NavBar'
import UI from '../components/UI'
import Hero from '../components/Hero'

function Welcome() {
  return (
    <>
    
    <div className='main-top'>
    <NavBar/>
    <UI/>
    <Hero/>
    </div>
    <BannerGlobalCompact/>
    </>
  )
}

export default Welcome