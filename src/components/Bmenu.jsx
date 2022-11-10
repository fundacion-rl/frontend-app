import { Button, Drawer, Radio, Space } from 'antd';
import React, { useState } from 'react';
import '../styles/Bmenu.css'
import { Link as LinkRouter} from 'react-router-dom'

const Bmenu = () => {
  const NavArray = [
    {
        id: "_quienessomos",
        to: "/quienessomos",
        title: "Quienes Somos"
    },
    {
        id: "_proyectos",
        to: "/proyectos",
        title: "Proyectos"
    },
    {
        id: "_programas",
        to: "/programas",
        title: "Programas"
    },
    {
        id: "_donaciones",
        to: "/donaciones",
        title: "Donaciones"
    },
    {
        id: "_contacto",
        to: "/contacto",
        title: "Contacto"
    },
]

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space className='menu-burger'>
        <Button className='button-burger navbar-toggler'  onClick={showDrawer}>
        <i class="bi bi-menu-button-wide"></i>
        </Button>
      </Space>
      <Drawer
        title="Menú"
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={open}
        className="menu-drawer"
      >
            {NavArray.map((link) => (
                <LinkRouter className="nav-link" to={link.to} key={link.id}>
                    {link.title}
                </LinkRouter>
            ))}
      </Drawer>
    </>
  );
};
export default Bmenu;