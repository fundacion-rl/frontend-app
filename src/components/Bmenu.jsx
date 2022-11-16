import { Button, Drawer, Radio, Space } from "antd";
import React, { useState } from "react";
import "../styles/Bmenu.css";
import { Link as LinkRouter } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Bmenu = () => {
  const NavArray = [
    {
      id: "Inicio",
      to: "/",
      title: "Inicio",
    },
    {
      id: "_quienessomos",
      to: "/quienessomos",
      title: "Quienes Somos",
    },
    {
      id: "_proyectos",
      to: "/proyectos",
      title: "Proyectos",
    },
    {
      id: "_programas",
      to: "/programas",
      title: "Programas",
    },
    {
      id: "_donaciones",
      to: "/donaciones",
      title: "Donaciones",
    },
    {
      id: "_contacto",
      to: "/contacto",
      title: "Contacto",
    },
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space className="menu-burger">
        <Button className="button-burger navbar-toggler" onClick={showDrawer}>
          <i class="bi bi-menu-button-wide"></i>
        </Button>
      </Space>
      <Drawer
        id="drawer"
        title="Menú"
        placement={"right"}
        closable={true}
        onClose={onClose}
        open={open}
        className="menu-drawer"
      >

          {NavArray.map((link) => (
            <LinkRouter className="nav-link" to={link.to} key={link.id}>
              {link.title}
            </LinkRouter>
          ))}

          <div className="burguer-SocialMedia">
            <a href="https://twitter.com/FRetoLibertad" target="_blank">
              <img
                src="http://drive.google.com/uc?export=view&id=1LQw5gMPfq-CIv8jPuatxbwNZuRxJwM7k"
                alt="twitterLogo"
              />
            </a>
            <a href="https://www.facebook.com/FRetoLibertad" target="_blank">
              <img
                src="http://drive.google.com/uc?export=view&id=1C-xMvcgieswCSKhKJozriyc5cQBD4Y6-"
                alt="facebookLogo"
              />
            </a>
            <a href="https://www.instagram.com/fretolibertad" target="_blank">
              <img
                src="http://drive.google.com/uc?export=view&id=1OA-_ji160eGYH_Nu-K5jkwTpCv250Vit"
                alt="instagramLogo"
              />
            </a>
            <a href="" target="_blank">
              <img
                src="http://drive.google.com/uc?export=view&id=18rUvS_jCxYpGg73bASmr89IbSwNzgbAu"
                alt="linkedinLogo"
              />
            </a>
          </div>
      </Drawer>
    </>
  );
};
export default Bmenu;
