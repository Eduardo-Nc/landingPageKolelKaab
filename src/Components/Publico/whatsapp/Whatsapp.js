import React, { Fragment, useEffect, useState } from 'react';
import './Whatsapp.css';
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
import WhatsappApp from '../../../img/whatsapp.png';



const Whatsapp = () => {

    const dispatch = useDispatch();

    const { surnames, name, rol, photo } = useSelector(state => state.login);



    return (
        <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" className="cont-ico-whatsapp" title="WhatsApp" target="_blank" >
            <img src={WhatsappApp} />
        </a>
    )
}


export default Whatsapp;