import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from "../../../../img/textoLogo.png"
import Menu from "../../../../img/icono-menu.png"


import './styles.css';

const Index = () => {



  return (
    <div className='mainContHeader'>

      <Link to={"/inicio"} onClick={() => {
        window.scrollTo(0, 0)
      }} className='contLogoHeader animate__animated animate__fadeInLeft' >
        <img src={Logo} className='imgLogoHeader' />
      </Link>

      <div className='contMenuHeader'>
        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/inicio"} activeClassName="navLinkHeaderActive" className="navLinkHeader animate__animated animate__fadeInLeft animate__animated animate__fadeInRight"> <label>Inicio</label> </NavLink>
        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/nuestras-propiedades"} activeClassName="navLinkHeaderActive" className="navLinkHeader animate__animated animate__fadeInLeft animate__animated animate__fadeInRight"> <label >Propiedades</label> </NavLink>
        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/blog"} activeClassName="navLinkHeaderActive" className="navLinkHeader animate__animated animate__fadeInLeft animate__animated animate__fadeInRight"> <label>Blogs</label> </NavLink>
        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/login"} activeClassName="navLinkHeaderActive" className="navLinkHeader animate__animated animate__fadeInLeft animate__animated animate__fadeInRight"> <label>Iniciar Sesión</label> </NavLink>
      </div>

      <div className='contMenuHeaderMovil'>
        {/* <img src={Menu} className='imgMenu' /> */}
      </div>

    </div>
  )
}

export default Index