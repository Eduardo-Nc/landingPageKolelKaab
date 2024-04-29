import React, { Fragment, useEffect, useState } from 'react';
import './Blog.css';
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

import { findBlogs } from '../../Redux/actions/blogAction';



const Blog = () => {

    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)
    const { blogsData } = useSelector(state => state.blogs)


    const [openMenu, setOpenMenu] = useState(false);
    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        dispatch(findBlogs(false))
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
                            <div className="cont-div1-main-blog-new">
                                <div className="cont-div1-main-blog-new-2">
                                    {
                                        !loadingFind ?
                                            blogsData.length > 0 ?
                                                <>
                                                    {blogsData.map(item =>
                                                        <Link key={item._id} to={`/blog-detalles/${item._id}`} className="content-prin-item-blog">

                                                            <div className="cont-img-blog">
                                                                <div style={{ background: '#d7d7d7' }}>
                                                                    <img src={item.caratula} />
                                                                </div>
                                                            </div>

                                                            <div className="cont-title-detalles-blog">
                                                                <div className="cont-desc-title">
                                                                    <h2>{item.titulo}</h2>
                                                                    {/* <h2>Yucalpetén Resort Marina, la imperdible inversión en la Costa Yucateca</h2> */}
                                                                </div>
                                                                <div className="cont-desc-fecha-blog">
                                                                    <label style={{ textTransform: "capitalize" }}>
                                                                        <i style={{ marginRight: '7px' }} className="fas fa-calendar"></i>
                                                                        {moment(item.createdAt).format('MMMM DD, YYYY')}
                                                                    </label>
                                                                    <div className="barra-fecha"></div>
                                                                </div>

                                                                <div className="cont-description-blog">
                                                                    <p>{item.descripcion}</p>
                                                                </div>

                                                                <div className="cont-btn-blog">
                                                                    <a style={{ color: "#c9a857" }} >
                                                                        Continua Leyendo...
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )}

                                                </>
                                                :
                                                <div style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Sin Información</p>
                                                </div>
                                            :

                                            <div style={{ width: '100vw', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                                                    <span className="sr-only"></span>
                                                </div>
                                            </div>
                                    }
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
        </div>
    )
}



export default Blog;