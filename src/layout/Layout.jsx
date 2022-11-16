import React from 'react'
import Bmenu from '../components/Bmenu'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Sponsors from '../components/Sponsors'

export default function Layout({children}) {
  return (
    <>
    <div>
    <div className='nav-div'>
        <Bmenu />
        <NavBar />
      </div>
      {children}
      <Sponsors/>
      <Footer/>
    </div>
    </>
  )
}
