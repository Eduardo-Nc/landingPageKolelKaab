import React, { Fragment, useEffect, useState } from 'react';
import './Home.css';
import Logo from '../../img/logo.png';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

import ReactSimplyCarousel from 'react-simply-carousel';


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


import Arrowleft from '../../../src/img/iconos/arrowleft.png';
import ArrowRight from '../../../src/img/iconos/arrowRight.png';



//Redux
import { useDispatch, useSelector } from 'react-redux';
import { findPropiedadesUltimos } from '../../Redux/actions/propiedadesAction';



const Home = () => {

    const baseUrl = process.env.REACT_APP_API_URL;

    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)
    const { propiedadesUltimosData } = useSelector(state => state.propiedades);



    const [openMenu, setOpenMenu] = useState(false);
    const [inputSearch, setInputSearch] = useState("");
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useEffect(() => {
        dispatch(findPropiedadesUltimos(false))
    }, [])

    // console.log(propiedadesUltimosData)

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
                                    <Link to={`/descripcion-propiedad/${inputSearch}`}>
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
                                <NavLink onClick={() => { window.scrollTo(0, 0) }} to={"/blog"} activeClassName="menu-selec-movil" > <label className="nav-item-navmenu-movil">Blogs</label> </NavLink>
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

                            <div className="cont-div1-main-home">
                                <div className="container-div1-main-home">
                                    <h2 className="animate__animated animate__animated animate__fadeInDown">¡ASEGURA, CREA Ó<br></br>INVIERTE CON<br></br>LA MEJOR<br></br>OPCIÓN!</h2>
                                    <p className="animate__animated animate__backInUp">
                                        Estamos comprometidos para ayudar a<br></br>nuestros clientes a invertir en los<br></br>desarrollos inmobiliarios más prósperos<br></br>y sobresalientes del sureste
                                    </p>
                                </div>
                                <div className="container-div2-main-home">
                                    <img className="animate__animated animate__backInRight" src={Depas} />
                                </div>
                            </div>

                            <div className="cont-div2-main-home">

                                <div className="container-title-cont-div2-main-home animate__animated animate__backInRight">
                                    <h2></h2>
                                    <h2>PROPIEDADES DESTACADAS</h2>
                                    <Link to="/nuestras-propiedades" className="cont-div2-main-home-vermas">Ver más</Link>
                                </div>


                                <ReactSimplyCarousel
                                    activeSlideIndex={activeSlideIndex}
                                    onRequestChange={setActiveSlideIndex}
                                    itemsToShow={1}
                                    itemsToScroll={1}
                                    forwardBtnProps={{
                                        //here you can also pass className, or any other button element attributes
                                        style: {
                                            alignSelf: 'center',
                                            background: 'rgba(0, 0, 0, 0.3)',
                                            border: 'none',
                                            borderRadius: '100%',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                            height: 35,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            width: 35,
                                            marginLeft: '10px'
                                        },
                                        children: <img style={{ width: '15px', height: '15px', objectFit: 'contain' }} src={ArrowRight} />,
                                    }}
                                    backwardBtnProps={{
                                        //here you can also pass className, or any other button element attributes
                                        style: {
                                            alignSelf: 'center',
                                            background: 'rgba(0, 0, 0, 0.3)',
                                            border: 'none',
                                            borderRadius: '100%',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                            height: 35,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            width: 35,
                                            marginRight: '10px'
                                        },
                                        children: <img style={{ width: '15px', height: '15px', objectFit: 'contain' }} src={Arrowleft} />,
                                    }}
                                    responsiveProps={[
                                        {
                                            itemsToShow: 1,
                                            itemsToScroll: 1,
                                            minWidth: 768,
                                        },
                                    ]}
                                    autoplay={false}
                                    speed={400}
                                    easing="linear"
                                >

                                    {propiedadesUltimosData.map((item, index) => {
                                        return (
                                            <Link to={`/descripcion-propiedad/${item._id}`} key={item._id} title="Ver" className="cont-target-item-propiedad-home">
                                                <div className="cont-target-item-propiedad-home-item-photo">
                                                    <img src={item.caratula_propiedad} />
                                                </div>
                                                <div className="cont-target-item-propiedad-home-item-details">
                                                    <strong>{item?.nombre ? item?.nombre : ""}</strong>
                                                    <label>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(item?.precio ? item?.precio : 0)}</label>
                                                    <div className="cont-tipo-oferta-nombre">
                                                        <label>{item?.tipoOferta?.nombre ? item?.tipoOferta?.nombre : ""}</label>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}

                                </ReactSimplyCarousel>
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
        </div>
    )
}



export default Home;