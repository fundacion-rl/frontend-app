import React from 'react'
import BannerGlobalCompact from '../components/BannerGlobalCompact'
import NavBar from '../components/NavBar'
import UI from '../components/UI'

function Welcome() {
  return (
    <>
    
    <div className='main-top'>
    <NavBar/>
    <UI/>
    
    </div>
    <BannerGlobalCompact/>
    </>
  )
}

export default Welcome