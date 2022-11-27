import React from "react";
import { Link as LinkRouter } from "react-router-dom";
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
          La Fundación consiste en ayudar a los internos colombianos y
          extranjeros a resocialización, acompañamiento jurídico, servicio
          médico, psicológico, entre otros.
        </p>
      </div>
      <div className="contacto">
        <a href="">
          <p>
            <i class="bi bi-geo-alt"></i> Carrera 12 # 14 - 71, Ofi. 302
          </p>
        </a>
        <a href="">
          <p className="f-email">
            <i class="bi bi-envelope"></i> info@fundacionretornoalalibertad.org
          </p>
        </a>
        <a href="https://api.whatsapp.com/send?phone=573175505158&text=Hola%2C+necesito+ayuda+con%3A" target="_blank">
          <p>
            <i class="bi bi-phone"></i> (+57) 317 550 5158
          </p>
        </a>
      </div>
      <div className="contacto-media">
        <a href="">
          <p>
            <i class="bi bi-geo-alt"></i>
          </p>
        </a>
        <a href="mailto:info@fundacionretornoalalibertad.org">
          <p className="f-email">
            <i class="bi bi-envelope"></i>
          </p>
        </a>
        <a href="tel:+573175505158">
          <p>
            <i class="bi bi-phone"></i>
          </p>
        </a>
      </div>

      <div className="bottom">
        <p className="copyright">
          Fundación Retorno a la Libertad © 2022 - Todos los derechos
          reservados.
        </p>
        <div className="social">
        <a href="https://api.whatsapp.com/send?phone=573175505158&text=Hola%2C+necesito+ayuda+con%3A" target="_blank">
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
          <a href="https://www.linkedin.com/in/retorno-libertad-bb328a109">
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
