import React, { Fragment, useEffect, useState } from 'react';
import './Dashboard.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import "moment/min/locales";
import 'moment/locale/es';

// components
import Header from '../../Components/header/Header';
import Sidebar from '../../Components/sidebar/Sidebar';
import Notifications from '../../Components/notifications/Notifications';




//Bootstrap
import { Toast, OverlayTrigger } from 'react-bootstrap';



//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirMenu } from '../../Redux/actions/uiAction';

import { findUsersColaboradores } from '../../Redux/actions/usersAction';
import { findDesarrollosCount } from '../../Redux/actions/desarrollosAction';
import { findPropiedadesCount } from '../../Redux/actions/propiedadesAction';



//Images
import Logo from '../../img/logo.png';


const Dashboard = () => {

    const dispatch = useDispatch();

    const { name, surnames, rol, uid, photo, idRol } = useSelector(state => state.login);
    const { countColaboradores } = useSelector(state => state.users);
    const { desarrollosCount } = useSelector(state => state.desarrollos);
    const { propiedadesCount } = useSelector(state => state.propiedades);


    useEffect(() => {
        dispatch(findUsersColaboradores())
    }, [])

    useEffect(() => {
        dispatch(findDesarrollosCount(false))
        dispatch(findPropiedadesCount(false))
        return () => {
            dispatch(findDesarrollosCount(true))
            dispatch(findPropiedadesCount(true))
        }
    }, [])

    return (
        <Fragment>
            <div className="cont-all-principal-dashboard">
                <Header />
                <Sidebar />
                <Notifications />
                <div className="cont-principal-dashboard animate__animated animate__fadeInUp animate__faster 2s">
                    <div className="cont-principal-dashboard-item">
                        <div className="cont-principal-header-item-1">
                            <div className="cont-principal-header-item-1-perfil">
                                <div>
                                    <img src={photo ? photo : Logo} alt="Logo" />
                                </div>
                            </div>
                            <div className="cont-principal-header-item-1-desc-1">
                                <h1>Bienvenido de nuevo, {name.split(" ")[0] + " " + surnames.split(" ")[0]}!</h1>
                                <div className="cont-principal-header-item-1-desc-2">
                                    <div>
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <p style={{ textTransform: "capitalize" }}>{moment().format("ddd DD MMMM YYYY")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cont-principal-header-item-2">
                            <Link to="/settings">
                                <i className="fas fa-cog"></i>
                                <label>Configuración</label>
                            </Link>

                            <Link style={{ background: 'rgb(44, 44, 44)' }} to="/profile">
                                <i className="fas fa-user"></i>
                                <label>Perfil</label>
                            </Link>
                        </div>
                    </div>


                    <div className="div-divider-title-dash-vista">
                        <h2>Estatus</h2>
                    </div>



                    <div className="cont-user-preview">
                        <div className="cont-user-item-all">
                            {
                                (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") ?
                                    <Link to="/users">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Link>
                                    :
                                    <a></a>
                            }
                            <label style={{ color: "#2196f3" }}>{countColaboradores && countColaboradores.length}</label>
                            <strong style={{ color: "#2196f3" }}>Usuarios</strong>
                            <div className="cont-por-vencer">
                                {/* <p style={{ fontWeight: "400" }}>Recientes: </p> <p style={{ fontWeight: "bold", marginLeft: '5px' }}>10</p> */}
                            </div>
                        </div>

                        <div className="cont-user-item-all">
                            {
                                (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") ?
                                    <Link to="/propiedades">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Link>
                                    :
                                    <a></a>
                            }
                            <label style={{ color: "#f44336" }}>{propiedadesCount && propiedadesCount}</label>
                            <strong style={{ color: "#f44336" }}>Propiedades</strong>
                            <div className="cont-por-vencer">
                                {/* <p style={{ fontWeight: "400" }}>Recientes: </p> <p style={{ fontWeight: "bold", marginLeft: '5px' }}>10</p> */}
                            </div>
                        </div>

                        <div className="cont-user-item-all">
                            {
                                (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") ?
                                    <Link to="/users">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Link>
                                    :
                                    <a></a>
                            }
                            <label style={{ color: "#ffc107" }}>{countColaboradores && countColaboradores.length > 0 && countColaboradores.filter(i => i.perfil.rol === "63ddabf3cce4e43d749383a9").length}</label>
                            <strong style={{ color: "#ffc107" }}>Colaboradores</strong>
                            <div className="cont-por-vencer">
                                {/* <p style={{ fontWeight: "400" }}>Recientes: </p> <p style={{ fontWeight: "bold", marginLeft: '5px' }}>10</p> */}
                            </div>
                        </div>

                        <div className="cont-user-item-all">
                            {
                                (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab") ?
                                    <Link to="/desarrollos">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Link>
                                    :
                                    <a></a>
                            }
                            <label style={{ color: "#4caf50" }}>{desarrollosCount && desarrollosCount}</label>
                            <strong style={{ color: "#4caf50" }}>Desarrollos</strong>
                            <div className="cont-por-vencer">
                                {/* <p style={{ fontWeight: "400" }}>Recientes: </p> <p style={{ fontWeight: "bold", marginLeft: '5px' }}>10</p> */}
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </Fragment>
    )
}


export default Dashboard;