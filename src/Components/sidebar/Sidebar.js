import React, { Fragment, useEffect } from 'react';
import './Sidebar.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import "moment/min/locales";
import 'moment/locale/es';



//Bootstrap
import { Toast, OverlayTrigger, Tooltip } from 'react-bootstrap';


//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirMenu } from '../../Redux/actions/uiAction';
import { startLogout } from '../../Redux/actions/loginAction';

//Images
import Campana from '../../img/icono-compana.png';
import IconoMenu from '../../img/close-blanco.png';
import Logo from '../../img/textoLogo.png';
import LogoHeader from '../../img/logo.png';





const Sidebar = () => {

    const dispatch = useDispatch();

    const { surnames, name, rol, email, photo, idRol } = useSelector(state => state.login);
    const { abrirM, mostrarMenu } = useSelector(state => state.menu);

    const handleLogout = () => {

        Swal.fire({
            html:
                `
                <div style="overflow: hidden;" >
                <div style="width: 100%; display:flex; justify-content:center; align-items:center; margin-bottom:5px; overflow: hidden;">
                <div style="width: 43px; height: 43px; overflow: hidden; border-radius: 50%; display:flex; justify-content:center; align-items:center; "}}>
                <img style="width: 100%; height: 100%; object-fit: cover;"  src=${photo ? photo : Logo} alt="Logo"></img> <br></br> 
                </div>
                </div>
                ` +
                `<b>${name}</b> <br></br>` +
                '<p>¿Quieres salir de la sesión actual?</p></div>',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startLogout())
            }
        })
    }

    return (
        <Fragment>
            {abrirM ?
                <div className="content-prin-background-sidebar">

                    {abrirM ?
                        <div style={{ left: !mostrarMenu ? '-10%' : '0%' }} className="content-prin-sidebar-1">

                            <div className="content-prin-sidebar-header">
                                <Link to="/dashboard" onClick={() => { dispatch(abrirMenu()) }} className="cont-img-sidebar-logo">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                                <div onClick={() => { dispatch(abrirMenu()) }} className="cont-img-sidebar-menu">
                                    <div>
                                        <img src={IconoMenu} alt="IconoMenu" />
                                    </div>
                                </div>
                            </div>

                            <div className="content-segun-sidebar-all">

                                <NavLink onClick={() => { dispatch(abrirMenu()) }} to="/profile" className="cont-perfil-sidebar">
                                    <div>
                                        <img src={photo ? photo : LogoHeader} alt="Logo" />
                                    </div>
                                    <label className="label-perfil-sidebar-1">{name.split(" ")[0] + " " + surnames.split(" ")[0]}</label>
                                    <label className="label-perfil-sidebar-2">{email}</label>
                                </NavLink>

                                <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/dashboard" className="items-menu-sidebar">
                                    <div className="items-menu-sidebar-1">
                                        <i className="fas fa-home"></i>
                                    </div>
                                    <div className="items-menu-sidebar-2">
                                        <label>Dashboard</label>
                                    </div>
                                </NavLink>

                                {
                                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&
                                    <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/propiedades" className="items-menu-sidebar">
                                        <div className="items-menu-sidebar-1">
                                            <i className="fas fa-file-contract"></i>
                                        </div>
                                        <div className="items-menu-sidebar-2">
                                            <label>Propiedades</label>
                                        </div>
                                    </NavLink>
                                }

                                <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/cotizador" className="items-menu-sidebar">
                                    <div className="items-menu-sidebar-1">
                                        <i className="fas fa-map"></i>
                                    </div>
                                    <div className="items-menu-sidebar-2">
                                        <label>Cotizador</label>
                                    </div>
                                </NavLink>

                                {
                                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&
                                    <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/desarrollos" className="items-menu-sidebar">
                                        <div className="items-menu-sidebar-1">
                                            <i className="fas fa-home"></i>
                                        </div>
                                        <div className="items-menu-sidebar-2">
                                            <label>Desarrollos</label>
                                        </div>
                                    </NavLink>
                                }

                                {
                                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&
                                    <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/lotes" className="items-menu-sidebar">
                                        <div className="items-menu-sidebar-1">
                                            <i className="fas fa-list"></i>
                                        </div>
                                        <div className="items-menu-sidebar-2">
                                            <label>Lotes</label>
                                        </div>
                                    </NavLink>
                                }

                                {
                                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&
                                    <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/users" className="items-menu-sidebar">
                                        <div className="items-menu-sidebar-1">
                                            <i className="fas fa-user-friends"></i>
                                        </div>
                                        <div className="items-menu-sidebar-2">
                                            <label>Usuarios</label>
                                        </div>
                                    </NavLink>
                                }

                                {
                                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") &&
                                    <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/blogs" className="items-menu-sidebar">
                                        <div className="items-menu-sidebar-1">
                                            <i className="fas fa-layer-group"></i>
                                        </div>
                                        <div className="items-menu-sidebar-2">
                                            <label>Blogs</label>
                                        </div>
                                    </NavLink>
                                }

                                <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/profile" className="items-menu-sidebar">
                                    <div className="items-menu-sidebar-1">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="items-menu-sidebar-2">
                                        <label>Perfil</label>
                                    </div>
                                </NavLink>

                                <NavLink onClick={() => { dispatch(abrirMenu()) }} activeClassName="active-items-menu-sidebar" to="/settings" className="items-menu-sidebar">
                                    <div className="items-menu-sidebar-1">
                                        <i className="fas fa-cog"></i>
                                    </div>
                                    <div className="items-menu-sidebar-2">
                                        <label>Configuración</label>
                                    </div>
                                </NavLink>


                                <div className="div-siderbar-label">
                                    {/* <strong>AUTH</strong> */}
                                </div>


                                <div onClick={() => {
                                    dispatch(abrirMenu())
                                    handleLogout()
                                }} className="items-menu-sidebar">
                                    <div className="items-menu-sidebar-3">
                                        <i className="fas fa-sign-out-alt"></i>
                                    </div>
                                    <div className="items-menu-sidebar-2">
                                        <label>Cerrar Sesión</label>
                                    </div>
                                </div>

                            </div>

                        </div>
                        :
                        <div className="content-prin-sidebar-0"></div>
                    }

                    <div onClick={() => { dispatch(abrirMenu()) }} className="content-prin-sidebar-2">

                    </div>
                </div>
                :
                <div style={{ transition: '0.5s' }}></div>
            }
        </Fragment >
    )
}


export default Sidebar;