import React, { Fragment, useEffect } from 'react';
import './Notifications.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import "moment/min/locales";
import 'moment/locale/es';



//Bootstrap
import { Toast, OverlayTrigger, Tooltip } from 'react-bootstrap';


//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirNotificaciones } from '../../Redux/actions/uiAction';
import { startLogout } from '../../Redux/actions/loginAction';

//Images
import Campana from '../../img/icono-compana.png';
import IconoMenu from '../../img/close-black.png';
import Logo from '../../img/textoLogo.png';
import LogoHeader from '../../img/logo.png';



const Notifications = () => {

    const dispatch = useDispatch();

    const { surnames, name, rol, email } = useSelector(state => state.login);
    const { abrirN, mostrarNotification } = useSelector(state => state.menu);


    return (
        <Fragment>
            {abrirN ?
                <div className="content-prin-background-notificacion">

                    {abrirN ?
                        <div style={{ right: !mostrarNotification ? '-20%' : '0%' }} className="content-prin-notificacion-1">

                            <div className="content-prin-notificacion-header">
                                <div className="cont-img-notificacion-logo">
                                    <label>Notificaciones</label>
                                </div>
                                <div onClick={() => { dispatch(abrirNotificaciones()) }} className="cont-img-notificacion-menu">
                                    <div>
                                        <img src={IconoMenu} alt="IconoMenu" />
                                    </div>
                                </div>
                            </div>

                            <div className="content-segun-notificacion-all">

                                {
                                    false ?
                                        <div className="content-noti">
                                            <div className="cont-close-title-noti">
                                                <div className="cont-img-notificacion-menu-item">
                                                    <div>
                                                        <img src={IconoMenu} alt="IconoMenu" />
                                                    </div>
                                                </div>
                                                <strong>Titulo de la notificación</strong>
                                            </div>
                                            <p>Daily challenges Your submission has been accepted Daily challenges Your submission has been accepted</p>
                                        </div>
                                        :
                                        <div className="cont-sin-noti">
                                            <label>No hay notificaciones por ahora</label>
                                        </div>
                                }




                            </div>


                            <div className="cont-footer-notificacion-menu">
                                {/* <label>Descartar todo</label> */}
                            </div>

                        </div>
                        :
                        <div className="content-prin-notificacion-0"></div>
                    }

                    <div onClick={() => { dispatch(abrirNotificaciones()) }} className="content-prin-notificacion-2">

                    </div>
                </div>
                :
                <div style={{ transition: '0.5s' }}></div>
            }
        </Fragment >
    )
}


export default Notifications;