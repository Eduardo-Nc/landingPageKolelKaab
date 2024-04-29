import React, { Fragment, useEffect, useState } from 'react';
import './Contacto.css';
import Logo from '../../img/logo.png';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';



import Header from "../../Components/Publico/header/Header";
import Whatsapp from "../../Components/Publico/whatsapp/Whatsapp";
import WhatsappApp from '../../../src/img/whatsapp.png';


import Depas from "../../../src/img/depas.png"
import Close from "../../../src/img/close-black.png"
import Lupa from "../../../src/img/search.png"

import Lowhatsapplogogo from '../../../src/img/whatsapplogo.png';
import Facebook from '../../../src/img/facebook.png';
import Instagram from '../../../src/img/instagram.png';
import Messenger from '../../../src/img/messenger.png';


//Redux
import { useDispatch, useSelector } from 'react-redux';




const Contacto = () => {

    const baseUrl = process.env.REACT_APP_API_URL;

    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)


    const [openMenu, setOpenMenu] = useState(false);
    const [inputSearch, setInputSearch] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [datos, setDatos] = useState({});


    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };


    // console.log(propiedadesUltimosData)
    const enviarMensaje = async () => {

        // e.preventDefault();

        setEnviado(true)

        if (!datos.nombre) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su nombre completo",
                confirmButtonText: `Aceptar`,
            })

            return

        } else if (!datos.telefono) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su número",
                confirmButtonText: `Aceptar`,
            })
        } else if (!datos.correo) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su correo electrónico",
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!datos.mensaje) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su mensaje",
                confirmButtonText: `Aceptar`,
            })
        } else if (!datos.area) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su área de su interés",
                confirmButtonText: `Aceptar`,
            })
            return
        } else {

            axios.post(baseUrl + '/user/contacto/negocio', {
                nombre: datos.nombre,
                telefono: datos.telefono,
                correo: datos.correo,
                mensaje: datos.mensaje,
                area: datos.area
            }).then(response => {
                setEnviado(false);
                setDatos({})
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: "En breve nos pondremos en contacto contigo",
                    confirmButtonText: 'Aceptar',

                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            setDatos({})
                            // window.location.href = "/inicio";
                        }
                    })
            }).catch(e => {
                console.log(e);
            });

        }

    }



    return (
        <div className="cont-main-home">
            <div className="cont-main-home-div-2">
                {
                    openMenu ?
                        <div className="cont--menu-movil-desplegable">

                            <div className="cont--menu-movil-desplegable-btn-close-menu">
                                <div onClick={() => { setOpenMenu(!openMenu) }}>
                                    <img src={Close} />
                                </div>
                            </div>

                            <div className="cont--menu-movil-desplegable-input-search">
                                <div className="container-search-text-input">
                                    <Link to={`/nuestras-propiedades/${inputSearch}`}>
                                        <img src={Lupa} />
                                    </Link>
                                    <input className="cont-inputSearch" onChange={(e) => {
                                        setInputSearch(e.target.value)
                                    }} name="inputSearch" value={inputSearch} type="text" placeholder="Buscar propiedades" />
                                </div>
                            </div>


                            <div className="cont--menu-movil-desplegable-items-menu">
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/inicio"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Inicio</label> </NavLink>
                                {/* <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/nosotros"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Nosotros</label> </NavLink> */}
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/nuestras-propiedades"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Propiedades</label> </NavLink>
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/contacto"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Contacto</label> </NavLink>
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/blog"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Blog</label> </NavLink>
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/login"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Iniciar Sesión</label> </NavLink>
                            </div>

                            <div className="cont--menu-movil-desplegable-redes-sociales">
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

                        </div>
                        :
                        <>
                            <Header inputSearch={inputSearch} setInputSearch={setInputSearch} openMenu={openMenu} setOpenMenu={setOpenMenu} />

                            <div className="cont-div1-main-contacto">
                                <div className="cont-div1-main-contacto-header-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.186595198038!2d-89.57898999999999!3d21.025218600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56771609d7b52b%3A0x20134d775406896a!2sInmobiliaria%20Koolel-Kaab!5e0!3m2!1ses-419!2smx!4v1678305886832!5m2!1ses-419!2smx" width="100%" height="310" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                </div>

                                <div className="cont-main-form-contacto">
                                    <div className="cont-div1-form-contacto">
                                        <div className="contenedor-formulario-contacto">
                                            <strong>¡Contáctanos!</strong>

                                            <form >

                                                <div className="cont-name-cel-form">
                                                    <input type="text" required name="nombre" value={datos?.nombre} onChange={handleChange} placeholder="Nombres y Apellidos" />
                                                    <input type="text" maxLength="10" required value={datos?.telefono} name="telefono" onChange={handleChange} placeholder="Teléfono" />
                                                </div>



                                                <div className="cont-name-cel-form">
                                                    <input type="email" required name="correo" value={datos?.correo} onChange={handleChange} placeholder="Correo electrónico" />
                                                    <select name="area" value={datos?.area} onChange={handleChange} required>
                                                        <option defaultValue>Seleccione área de interés</option>
                                                        <option value="Comercialización" >Comercialización</option>
                                                        <option value="Asesoria legal" >Asesoria legal</option>
                                                        <option value="Otros" >Otros</option>
                                                    </select>
                                                </div>

                                                <textarea className="cont-form-contacto-textarea" rows="4" value={datos?.mensaje} placeholder="Mensaje" required name="mensaje" onChange={handleChange} autoComplete="off" >

                                                </textarea>

                                                <div className="contenedor-input-contacto">
                                                    {enviado ?
                                                        <div className="spinner-border" role="status">
                                                            <span className="sr-only">Cargando...</span>
                                                        </div>
                                                        :
                                                        <input onClick={() => enviarMensaje()} type="submit" value="Enviar" />
                                                    }
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="cont-div2-form-contacto">
                                        <h3>Información de Contacto</h3>

                                        <a href="https://www.google.com/maps/place/Inmobiliaria+Koolel-Kaab/@21.0252186,-89.5811841,17z/data=!3m1!4b1!4m6!3m5!1s0x8f56771609d7b52b:0x20134d775406896a!8m2!3d21.0252186!4d-89.57899!16s%2Fg%2F11r_yr7wqw"
                                            target="_blank"
                                        >
                                            Calle 18ª #255 Privada Quinta Real (Altabrisa) C.P. 97130
                                        </a>

                                        <a href="tel:9991295931"
                                        >
                                            999-129-5931
                                        </a>
                                        <a href="mailto:info@koolelkaab.com.mx"
                                        >
                                            info@koolelkaab.com.mx
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className="contenedor-footer-main-home">
                                <div className="contenedor-footer-div1-main-main">
                                    <div className="contenedor-footer-div-items">
                                        <h4>Oficina de Atención y Ventas</h4>
                                        <a href="https://www.google.com/maps/place/Inmobiliaria+Koolel-Kaab/@21.0252186,-89.5811841,17z/data=!3m1!4b1!4m6!3m5!1s0x8f56771609d7b52b:0x20134d775406896a!8m2!3d21.0252186!4d-89.57899!16s%2Fg%2F11r_yr7wqw"
                                            target="_blank"
                                        >
                                            Calle 18ª #255 Privada Quinta Real (Altabrisa) C.P. 97130
                                        </a>

                                        <h4 className='horarios-h4'>Horario de Atención</h4>
                                        <label>
                                            de Lunes a Viernes <br></br>
                                            08:00 a 18:00
                                        </label>
                                        <label>
                                            Sábados<br></br>
                                            08:00 a 14:00
                                        </label>
                                    </div>
                                    <div className="contenedor-footer-div-items">
                                        <h4>Contáctanos:</h4>
                                        <a href="tel:9991295931"
                                        >
                                            999-129-5931
                                        </a>
                                        <a href="mailto:info@koolelkaab.com.mx"
                                        >
                                            info@koolelkaab.com.mx
                                        </a>
                                    </div>
                                    <div className="contenedor-footer-div-items">
                                        <h4>Encuéntranos en</h4>
                                        <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" title="WhatsApp" target="_blank">
                                            WhatsaApp
                                        </a>
                                        <a href="https://www.facebook.com/inmobiliariakoolel" title="Facebook" target="_blank">
                                            Facebook
                                        </a>
                                        <a href="https://www.instagram.com/inmobiliariakoolelkaab/" title="Instagram" target="_blank">
                                            Instagram
                                        </a>
                                        <a href="https://www.facebook.com/messages/t/1692801737639678" title="Messenger" target="_blank">
                                            Messenger
                                        </a>
                                    </div>
                                </div>
                                <div className="contenedor-footer-main-main">
                                    <label>© {moment().format("YYYY")} COPYRIGHT: KOOLEL KAAB S.A DE C.V.</label>
                                </div>
                            </div>

                            <Whatsapp />
                        </>
                }
            </div>
        </div >
    )
}



export default Contacto;