import React, { Fragment, useState, useEffect } from 'react';
import './Descripcion.css';
import axios from 'axios';
import moment from 'moment';
import { Link, NavLink, useParams } from 'react-router-dom';



import Logo from '../../../src/img/logo.png';
import tamanoCasa2 from '../../../src/img/iconos/tamano-de-la-casa3.png';
import garaje from '../../../src/img/iconos/garaje.png';
import toilet from '../../../src/img/iconos/toilet.png';
import cama from '../../../src/img/iconos/cama.png';


import Close from "../../../src/img/close-black.png"
import Lupa from "../../../src/img/search.png"

import Lowhatsapplogogo from '../../../src/img/whatsapplogo.png';
import Facebook from '../../../src/img/facebook.png';
import Instagram from '../../../src/img/instagram.png';
import Messenger from '../../../src/img/messenger.png';
import arrowLeft from '../../../src/img/arrowLeft.png';
import Marker from '../../../src/img/iconos/marker.png';




import Header from "../../Components/Publico/header/Header";
// import Logo from '../../../img/logoSplah2.png';
import Whatsapp from "../../Components/Publico/whatsapp/Whatsapp";


import { Carousel } from 'react-bootstrap';
import Swal from 'sweetalert2';


//Redux
import { useDispatch, useSelector } from 'react-redux';
import { findForId, findPropiedadesUltimos } from '../../Redux/actions/propiedadesAction';


const Descripcion = (props) => {

    const params = useParams();
    const dispatch = useDispatch();
    // console.log(params.id)

    const { propiedadIdData, propiedadesUltimosData } = useSelector(state => state.propiedades);
    const { loadingFind } = useSelector(state => state.menu);




    const [datos, setDatos] = useState({});
    const [openMenu, setOpenMenu] = useState(false);
    const [inputSearch, setInputSearch] = useState("");



    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        dispatch(findPropiedadesUltimos(false, params.id))
        dispatch(findForId(params.id))
    }, [])

    // console.log(propiedadIdData)
    // console.log(loadingFind)

    return (
        <div className="cont-main-desc-propiedad">
            <div className="cont-main-desc-propiedad-div-2">
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
                                    <Link to={`/descripcion-propiedad/${inputSearch}`}>
                                        <img src={Lupa} />
                                    </Link>
                                    <input className="cont-inputSearch" onChange={(e) => {
                                        setInputSearch(e.target.value)
                                    }} name="inputSearch" value={inputSearch} type="text" placeholder="Buscar propiedades" />
                                </div>
                            </div>


                            <div className="cont--menu-movil-desplegable-items-menu">
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Inicio</label> </NavLink>
                                {/* <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/nosotros"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Nosotros</label> </NavLink> */}
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/nuestras-propiedades"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Propiedades</label> </NavLink>
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/contacto"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Contacto</label> </NavLink>
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/blogs"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Blog</label> </NavLink>
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
                        <Fragment>
                            <Header inputSearch={inputSearch} setInputSearch={setInputSearch} openMenu={openMenu} setOpenMenu={setOpenMenu} />
                            <div className="cont-back-home-descpropiedad">
                                <div>
                                    <img src={arrowLeft} />
                                    <Link to="/inicio">Volver</Link>
                                </div>
                            </div>

                            <div className="cont-div1-div2-propiedad">

                                <div className="cont-div1-main-desc-propiedad">
                                    <Carousel>
                                        {
                                            loadingFind === false &&
                                            propiedadIdData.galeria.length > 0 &&
                                            propiedadIdData?.galeria.map(foto =>
                                                <Carousel.Item key={foto.id_imagen_propiedad}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={foto}
                                                        alt="Sin Imagen"
                                                    />
                                                </Carousel.Item>
                                            )}
                                    </Carousel>
                                </div>

                                <div className="cont-div2-main-desc-propiedad">
                                    <label className="fecha-crecion">{moment().format("dddd, DD MMMM YYYY HH:MM A")}</label>
                                    <div className="cont-header-desc-propiedades">
                                        <div className="cont-img-header-desc-propiedades">
                                            <img
                                                src={Marker}
                                                alt="Marker"
                                            />
                                            <label>{propiedadIdData?.ciudadEstadoPais ? propiedadIdData?.ciudadEstadoPais : ""}</label>
                                        </div>
                                        <div className="cont-precio-header-desc-propiedades">
                                            <label>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(propiedadIdData?.precio ? propiedadIdData?.precio : 0)}</label>
                                            <div className="tipo-venta-desc-propiedades">
                                                <label>{propiedadIdData?.tipoOferta?.nombre ? propiedadIdData?.tipoOferta?.nombre : ""}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <h1>
                                        {propiedadIdData?.nombre ? propiedadIdData?.nombre : ""}
                                    </h1>

                                    <h2 className="subtitle-detalles-propiedades">Datos de Contacto:</h2>
                                    <div className="cont-contacto-logo-detalles">
                                        <div className="cont-contacto-logo-detalles-div1">
                                            <img
                                                src={Logo}
                                                alt="Logo"
                                            />
                                        </div>
                                        <div className="cont-contacto-logo-detalles-div2">
                                            <label>Inmobiliaria Koolel Kaab</label>
                                            <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" className="cont-contacto-solicitar-informacion" target="_blank">
                                                <label>Solicitar Información</label>
                                            </a>
                                        </div>
                                    </div>

                                    <h2 className="subtitle-detalles-propiedades">Características Generales:</h2>
                                    <div className="cont-caracteristicas-main-detalles">
                                        <div>
                                            <p>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(propiedadIdData?.precio ? propiedadIdData?.precio : 0)}</p>
                                            <label>{propiedadIdData?.tipoOferta?.nombre ? propiedadIdData?.tipoOferta?.nombre : ""}</label>
                                        </div>
                                        <div>
                                            <p>{propiedadIdData?.cantidadRecamaras ? propiedadIdData?.cantidadRecamaras : "N/P"}</p>
                                            <label>Recámara(s)</label>
                                        </div>
                                        <div>
                                            <p>{propiedadIdData?.cantidadBanos ? propiedadIdData?.cantidadBanos : "N/P"}</p>
                                            <label>Baño(s)</label>
                                        </div>
                                        <div>
                                            <p>{propiedadIdData?.construccion ? propiedadIdData?.construccion : "N/P"}</p>
                                            <label>De Construcción</label>
                                        </div>
                                        <div>
                                            <p>{propiedadIdData?.terreno ? propiedadIdData?.terreno : "N/P"}</p>
                                            <label>De Terreno</label>
                                        </div>
                                        <div>
                                            <p>{propiedadIdData?.cantidadGaraje ? propiedadIdData?.cantidadGaraje : "N/P"}</p>
                                            <label>Estacionamiento(s)</label>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="cont-div3-main-desc-propiedad">
                                <h3>Información Detallada:</h3>

                                <p>{propiedadIdData?.nombre ? propiedadIdData?.nombre : ""}</p>
                                <p>{propiedadIdData?.descripcion ? propiedadIdData?.descripcion : ""}</p>

                                <h4>ID:</h4>
                                <p>{propiedadIdData?.identificadorPropiedad ? propiedadIdData?.identificadorPropiedad : ""}</p>

                                <h4>Ubicación:</h4>
                                <p>{propiedadIdData?.ciudadEstadoPais ? propiedadIdData?.ciudadEstadoPais : ""}</p>
                                <h4>Referencias:</h4>
                                <p>{propiedadIdData?.referencias ? propiedadIdData?.referencias : ""}</p>
                                <h4>Tipo de Oferta:</h4>
                                <p>{propiedadIdData?.tipoOferta?.nombre ? propiedadIdData?.tipoOferta?.nombre : ""}</p>
                                <h4>Tipo de Inmueble:</h4>
                                <p>{propiedadIdData?.tipoInmueble?.nombre ? propiedadIdData?.tipoInmueble?.nombre : ""}</p>
                                <h4>Tipo de Pago:</h4>
                                <p>{propiedadIdData?.tipoPago?.nombre ? propiedadIdData?.tipoPago?.nombre : ""}</p>
                            </div>

                            <div className="cont-div4-main-desc-propiedad">
                                <h3 style={{ marginTop: '30px' }}>Mapa:</h3>
                                {
                                    propiedadIdData.mapa === "" ?
                                        <p>Mapa no disponible</p>
                                        :
                                        <iframe src={propiedadIdData?.mapa} width="770" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                }
                            </div>

                            <div className="cont-div5-main-desc-propiedad">
                                <h3 style={{ marginTop: '30px' }}>Sugeridos:</h3>

                                <div className="cont-footer-propiedad-item-desc">
                                    {propiedadesUltimosData.map(item => {
                                        return (
                                            <Link to={`/descripcion-propiedad/${item._id}`} key={item._id} className='cont-footer-propiedad-item-desc-items'>
                                                <img src={item?.caratula_propiedad ? item?.caratula_propiedad : ""} />
                                                <h5>{item?.nombre ? item?.nombre : ""}</h5>
                                            </Link>
                                        )
                                    })}
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
                        </Fragment>

                }
            </div>
        </div>
    )
}

export default Descripcion