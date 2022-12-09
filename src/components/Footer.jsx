import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img
          src="http://drive.google.com/uc?export=view&id=1Xu7_0odAZjlOaMKrREDOdzFjpWKL1dFd"
          alt="dark-logo"
        />
      </div>
      <div className="mision">
        <h5>Fundación Retorno a la Libertad</h5>
        <p>
        La fundación consiste en devolver la dignidad humana a aquellos que por diversas circunstancias, han perdido su libertad o se le han vulnerado sus derechos humanos. Se busca igualdad y bienestar para todos los ciudadanos del mundo.
        </p>
      </div>
      <div className="contacto">
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
      <div className="contacto-media">
        <a href="https://www.google.com/maps?ll=4.705944,-74.03886&z=17&t=m&hl=es-AR&gl=US&mapclient=embed&q=Cra.+12+%2314+Bogot%C3%A1+Colombia">
          <p>
            <i className="bi bi-geo-alt"></i>
          </p>
        </a>
        <a href="mailto:info@fundacionretornoalalibertad.org">
          <p className="f-email">
            <i className="bi bi-envelope"></i>
          </p>
        </a>
        <a href="tel:+573175505158">
          <p>
            <i className="bi bi-phone"></i>
          </p>
        </a>
      </div>

      <div className="bottom">
        <p className="copyright">
          Fundación Retorno a la Libertad © 2022 - Todos los derechos
          reservados.
        </p>
        <div className="social">
        <a href="https://api.whatsapp.com/send?phone=573175505158&text=Hola%2C+necesito+ayuda+con%3A" target="_blank" rel="noreferrer">
             <img className='logo-whatsapp-footer' src="http://drive.google.com/uc?export=view&id=1dq9QukiEjXiNh49PaBhXX3KRzlX4-xxN" alt="whatsappLogo" />
            </a>
          <a href="https://twitter.com/FRetoLibertad">
            <img
              src="http://drive.google.com/uc?export=view&id=1LQw5gMPfq-CIv8jPuatxbwNZuRxJwM7k"
              alt="twitter"
            />
          </a>
          <a href="https://www.facebook.com/FRetoLibertad">
            <img
              src="http://drive.google.com/uc?export=view&id=1C-xMvcgieswCSKhKJozriyc5cQBD4Y6-"
              alt="facebook"
            />
          </a>
          <a href="https://www.instagram.com/fretolibertad">
            <img
              src="http://drive.google.com/uc?export=view&id=1OA-_ji160eGYH_Nu-K5jkwTpCv250Vit"
              alt="instagram"
            />
          </a>
          <a href="https://www.linkedin.com/company/fundaci%C3%B3n-retorno-a-la-libertad/about/">
            <img
              src="http://drive.google.com/uc?export=view&id=18rUvS_jCxYpGg73bASmr89IbSwNzgbAu"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
