import React from "react";
import "../styles/Contacto.css";
import BanderaDiv from './BanderaDiv'
import BannerGlobalCompact from './BannerGlobalCompact'

function FormContacto() {
    return (
        <main>
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
            <h2 className="contacto-titulo">Contáctanos</h2>
            <h5 className="contacto-titulo">¿Tiene alguna pregunta? Empecemos a hablar</h5>



            <form id="contact">
                <fieldset>
                    <label htmlFor="nombre">
                        Nombre
                        <input
                            placeholder="Nombre"
                            type="text"
                            tabIndex="1"
                            required
                            id='nombre'
                        />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input placeholder="Email" type="email" tabIndex="2" required id='email' />
                    </label>

                    <label htmlFor="tel">
                        Número de Teléfono
                        <input
                            placeholder="Número de teléfono"
                            type="tel"
                            tabIndex="3"
                            required
                            id='tel'
                        />
                    </label>
                    <label htmlFor="asunto">
                        Asunto
                        <input placeholder="Asunto" type="text" tabIndex="4" id="asunto" />
                    </label>
                    <label htmlFor="mensaje">
                        Mensaje
                        <textarea placeholder="Tu mensaje" tabIndex="5" required id="mensaje"></textarea>
                    </label>
                    <input type="submit" value="Enviar" />
                </fieldset>
            </form>


            <div className="contacto-c">
                <a href="https://www.google.com/maps?ll=4.705944,-74.03886&z=17&t=m&hl=es-AR&gl=US&mapclient=embed&q=Cra.+12+%2314+Bogot%C3%A1+Colombia">
                    <p>
                        <i className="bi bi-geo-alt"></i> Carrera 12 # 14 - 71, Ofi. 302
                    </p>
                </a>
                <a href="mailto:info@fundacionretornoalalibertad.org">
                    <p className="f-email">
                        <i className="bi bi-envelope"></i> info@fundacionretornoalalibertad.org
                    </p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=573175505158&text=Hola%2C+necesito+ayuda+con%3A" target="_blank" rel="noreferrer">
                    <p>
                        <i className="bi bi-phone"></i> (+57) 317 550 5158
                    </p>
                </a>
            </div>


            <BanderaDiv />


            <div className="mapa-c">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.36816783637!2d-74.03886!3d4.705944000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aad2a683edf%3A0x34fc9042ca43231f!2sCra.%2012%20%2314%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1670611411944!5m2!1ses-419!2sus" allowFullScreen={true} title="myFrame" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <BannerGlobalCompact />
        </main>
    );
}

export default FormContacto;
