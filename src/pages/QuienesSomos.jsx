import React from 'react'
import CardsQuienesSomos from '../components/CardsQuienesSomos'
import Layout from '../layout/Layout'
import '../styles/QuienesSomos.css'

export default function QuienesSomos() {
    return (
        <Layout>
            <img src='http://drive.google.com/uc?export=view&id=1QlhCOJf6v8nizeO3F6xkV1EBUNAJKuVt' alt='nuestraFundacion' className='img-nuestra-fundacion' />
            <div className="div-programas">
            <h2>Quienes Somos</h2>
        </div>
            <CardsQuienesSomos/>
        </Layout>
    )
}
