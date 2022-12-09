import React from 'react'
import Layout from "../layout/Layout";

export default function Donaciones() {
    return (
        <Layout>
            <div>
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
            </div>
            <div>
                <div className="div-programas">
                    <h2>Donaciones</h2>
                </div>
                <div  className='donaciones d-flex p-5 justify-content-center '>

                    <div className='shadow rounded p-3 m-5 border d-flex flex-column justify-content-center'>
                        <img className='h-25 w-25' src="https://jumpseller.co/images/share/payu.jpg"/>
                        <p className='text-dark'>$10.000</p>
                    </div>
                    <div className='shadow rounded p-3 m-5 border  d-flex flex-column justify-content-center '>
                    <img className='h-25 w-25' src="https://jumpseller.co/images/share/payu.jpg"/>
                    <p className='text-dark'>$50.000</p>
                    </div>
                    <div className='shadow rounded p-3 m-5 border d-flex flex-column justify-content-center'>
                    <img className='h-25 w-25' src="https://jumpseller.co/images/share/payu.jpg"/>
                    <p className='text-dark'>$100.000</p>
                    </div>
                    <div className='shadow rounded p-3 m-5 border d-flex flex-column justify-content-center'>
                    <img className='h-25 w-25' src="https://jumpseller.co/images/share/payu.jpg"/>
                    <p className='text-dark'>Otra Cantidad</p>
                    </div>

                </div>

                <div  className='banco'>


                </div>

            </div>
        </Layout>

    )
}
