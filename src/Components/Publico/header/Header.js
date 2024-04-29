import React, { Fragment, useEffect, useState } from 'react';
import './Header.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import "moment/min/locales";
import 'moment/locale/es';


//Bootstrap
import { Toast, OverlayTrigger } from 'react-bootstrap';


//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirMenu, abrirNotificaciones } from '../../../Redux/actions/uiAction';
import { startLogout } from '../../../Redux/actions/loginAction';

//Images
import Logo from '../../../img/logoSplah2.png';
import Lupa from '../../../img/search.png';
import Menu from '../../../img/icono-menu-blanco.png';


import Lowhatsapplogogo from '../../../img/whatsapplogo.png';
import Facebook from '../../../img/facebook.png';
import Instagram from '../../../img/instagram.png';
import Messenger from '../../../img/messenger.png';


const Header = ({ openMenu, setOpenMenu, inputSearch, setInputSearch }) => {

    const dispatch = useDispatch();

    const { surnames, name, rol, photo } = useSelector(state => state.login);

    return (
        <>
            <div className="container-pre-header-redes">
                <div className="container-div1-text animate__animated animate__bounceInLeft ">
                    <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" title="¡Contáctanos!" target="_blank">
                        Elige bien, Elige con nosotros, ¡Contáctanos!
                    </a>
                </div>
                <div className="container-div2-redes-search">
                    <div className="container-div2-redes animate__animated animate__bounceIn">
                        <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" title="WhatsApp" target="_blank">
                            <img src={Lowhatsapplogogo} />
                        </a>
                        <a href="https://www.facebook.com/inmobiliariakoolel" title="Facebook" target="_blank">
                            <img src={Facebook} />
                        </a>
                        <a href="https://www.instagram.com/inmobiliariakoolelkaab/" title="Instagram" target="_blank">
                            <img src={Instagram} />
                        </a>
                        <a href="https://www.facebook.com/messages/t/1692801737639678" title="Messenger" target="_blank">
                            <img src={Messenger} />
                        </a>
                    </div>
                    <div className="container-div2-serach animate__animated animate__bounceInRight ">
                        <div className="container-search-text-input">
                            <Link to={`/nuestras-propiedades/${inputSearch}`}>
                                <img src={Lupa} />
                            </Link>
                            <input className="cont-inputSearch" onChange={(e) => {
                                setInputSearch(e.target.value)
                            }} name="inputSearch" value={inputSearch} type="text" placeholder="Buscar propiedades" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="cont-header-main-home animate__animated animate__fadeInDown ">
                <div className="cont-logo-header ">
                    <Link onClick={() => { window.scrollTo(0, 0) }} to="/inicio">
                        <img src={Logo} />
                    </Link>
                </div>
                <div className="cont-menu-monitor-display">
                    <div className="contenedor-menu-navbar-inicio">
                        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/inicio"} activeClassName="menu-selec-desk" > <label className="nav-item-navmenu">Inicio</label> </NavLink>
                    </div>
                    {/* <div className="contenedor-menu-navbar-inicio">
                        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/nosotros"} activeClassName="menu-selec-desk" > <label className="nav-item-navmenu">Nosotros</label> </NavLink>
                    </div> */}
                    <div className="contenedor-menu-navbar-inicio">
                        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/nuestras-propiedades"} activeClassName="menu-selec-desk" > <label className="nav-item-navmenu">Propiedades</label> </NavLink>
                    </div>
                    <div className="contenedor-menu-navbar-inicio">
                        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/contacto"} activeClassName="menu-selec-desk" > <label className="nav-item-navmenu">Contacto</label> </NavLink>
                    </div>
                    <div className="contenedor-menu-navbar-inicio">
                        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/blog"} activeClassName="menu-selec-desk" > <label className="nav-item-navmenu">Blogs</label> </NavLink>
                    </div>
                    <div className="contenedor-menu-navbar-inicio">
                        <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/login"} activeClassName="menu-selec-desk" > <label className="nav-item-navmenu">Iniciar Sesión</label> </NavLink>
                    </div>
                </div>
                <div className="cont-menu-mobile-display">
                    <div onClick={() => { setOpenMenu(!openMenu) }}>
                        <img src={Menu} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header;