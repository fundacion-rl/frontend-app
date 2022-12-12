import React from 'react'
import "../styles/Donaciones.css";

export default function DonacionesPasarela() {
  return (
    <div>
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
                <div className='donaciones d-flex flex-wrap justify-content-center align-items-center'>

                    <div className='shadow w-25 rounded p-3 m-5 border d-flex flex-column justify-content-center align-items-center'>
                        <img className='w-25' src="https://cdn-icons-png.flaticon.com/512/825/825520.png" alt='card-donation' />
                        <p className='text-dark p-2'>$10.000</p>
                        <button type="button" class="btn btn-primary btn-lg">Donar</button>
                    </div>
                    <div className='shadow w-25 rounded p-3 m-5 border  d-flex flex-column justify-content-center align-items-center '>
                        <img className='w-25' src="https://cdn-icons-png.flaticon.com/512/825/825520.png" alt='card-donation' />
                        <p className='text-dark p-2'>$50.000</p>
                        <button type="button" class="btn btn-primary btn-lg">Donar</button>
                    </div>
                    <div className='shadow w-25 rounded p-3 m-5 border d-flex flex-column justify-content-center align-items-center'>
                        <img className='w-25' src="https://cdn-icons-png.flaticon.com/512/825/825520.png" alt='card-donation' />
                        <p className='text-dark p-2'>$100.000</p>
                        <button type="button" class="btn btn-primary btn-lg">Donar</button>
                    </div>
                    <div className='shadow w-25 rounded p-3 m-5 border d-flex flex-column justify-content-center align-items-center'>
                        <img className='w-25' src="https://cdn-icons-png.flaticon.com/512/825/825520.png" alt='card-donation' />
                        <p className='text-dark p-2'>Otra Cantidad</p>
                        <button type="button" class="btn btn-primary btn-lg">Donar</button>
                    </div>

                </div>

                <div className='banco d-flex m-5 align-items-center justify-content-center'>
                    <img className='w-25' src="https://logotipoz.com/wp-content/uploads/2021/10/bancolombia-logo-png-transparente.png" alt='card-donation'/>
                    <p className='text-dark p-2 w-50 d-flex flex-column m-5'>Otra alternativa disponible, es  mediante nuestra  <strong className='text-dark'>Cuenta de Ahorros Bancolombia No. 39700000178.</strong> Si tienes algún tipo de problema también podrás comunicarte a nuestro Whatsapp y demás datos disponibles en la pagina web.</p>
                </div>

            </div>
    </div>
  )
}
