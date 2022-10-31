import React from 'react'
import CallToAction from './CallToAction'
import '../styles/Hero.css'
import SocialMedia from './SocialMedia'


export default function Hero() {
  return (
    <div className='heroContainer'>
        <CallToAction/>
        <div className='social-div'>
            <SocialMedia/>
        </div>
    </div>
  )
}
