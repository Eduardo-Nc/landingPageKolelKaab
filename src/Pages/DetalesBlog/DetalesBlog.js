import React, { Fragment, useState, useEffect } from 'react';
import './DetalesBlog.css';
import axios from 'axios';
import moment from 'moment';
import { Link, NavLink, useParams } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


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
import { findForId, findBlogsUltimos } from '../../Redux/actions/blogAction';


const DetalesBlog = (props) => {

    const params = useParams();
    const dispatch = useDispatch();

    // console.log(params.id)

    const { blogsDataId, blogsDataRecientes } = useSelector(state => state.blogs);
    const { loadingFind } = useSelector(state => state.menu);

    // console.log(blogsDataRecientes)
    // console.log(blogsDataRecientes.length)



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
        dispatch(findBlogsUltimos(false, params.id))
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
                                    <Link to={`/nuestras-propiedades/${inputSearch}`}>
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

                            <div className="cont-div1-main-detalles-blog-new">
                                <div className="cont-div1-main-detalles-blog-new-2">
                                    {
                                        !loadingFind ?
                                            <>
                                                <div className="cont-principal-blogdesc-final">

                                                    <div className="cont-1-desc-principal-item">

                                                        <div className="cont-title-detalles-blog-decs">
                                                            <div className="cont-desc-title-decs">
                                                                <h2>{blogsDataId && blogsDataId.titulo}</h2>
                                                            </div>
                                                            <div className="cont-desc-fecha-blog-decs">
                                                                <label style={{ textTransform: "capitalize" }}>
                                                                    <i style={{ marginRight: '7px' }} className="fas fa-calendar"></i>
                                                                    {moment(blogsDataId && blogsDataId.createdAt).format('MMMM DD, YYYY')}
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="cont-img-blog-decs">
                                                            {
                                                                Object.keys(blogsDataId).length > 0 ?
                                                                    <img src={blogsDataId.caratula} />
                                                                    :
                                                                    <img src="" />
                                                            }
                                                        </div>

                                                        <div className="cont-description-blog-decs">
                                                            {/* <p>{blogsDataId[0].descripcion}</p> */}
                                                            {/* {ReactHtmlParser(blogsDataId[0].content)} */}
                                                            <div dangerouslySetInnerHTML={{ __html: blogsDataId && blogsDataId.contenido }}></div>
                                                        </div>

                                                    </div>

                                                    <div className="cont-2-desc-principal-item">
                                                        <h2>Lo más reciente</h2>

                                                        {
                                                            !loadingFind ?
                                                                blogsDataRecientes.length > 0 ?

                                                                    <>
                                                                        {
                                                                            blogsDataRecientes.map(item =>
                                                                                <Link key={item.id_blog} to={`/blog-detalles/${item._id}`} className="cont-2-desc-item-desc">
                                                                                    <div>
                                                                                        <img src={item.caratula} />
                                                                                    </div>
                                                                                    <h4 style={{ color: 'black' }}>{item.titulo}</h4>
                                                                                </Link>

                                                                            )}
                                                                    </>

                                                                    :
                                                                    <p style={{ fontSize: '16px', fontWeight: 450 }}>Sin Información</p>
                                                                :
                                                                <div style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                                                    <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                                                                        <span className="sr-only"></span>
                                                                    </div>
                                                                </div>
                                                        }

                                                    </div>

                                                </div>

                                                <>
                                                    <div className="contenedor-principal-movil-blog-decs">
                                                        <div className="cont-prin-movil-blog-titulo">
                                                            <h2>{blogsDataId && blogsDataId.titulo}</h2>
                                                            <Link to="/blog" >
                                                                Regresar
                                                            </Link>


                                                        </div>

                                                        <div className="cont-prin-movil-blog-caratula">
                                                            <div>
                                                                {
                                                                    Object.keys(blogsDataId).length > 0 ?
                                                                        <img src={blogsDataId.caratula} />
                                                                        :
                                                                        <img src="" />
                                                                }
                                                            </div>
                                                            <label style={{ textTransform: "capitalize" }}>
                                                                <i style={{ marginRight: '7px' }} className="fas fa-calendar"></i>
                                                                {moment(blogsDataId && blogsDataId.createdAt).format('MMMM DD, YYYY')}
                                                            </label>
                                                        </div>

                                                        <div className="cont-prin-movil-blog-contenido">
                                                            {/* <div className="cont-prin-movil-blog-contenido-interno" dangerouslySetInnerHTML={{ __html: blogsDataId[0].content }}></div> */}
                                                            {ReactHtmlParser(blogsDataId && blogsDataId.contenido)}
                                                        </div>



                                                        <div className="cont-prin-movil-blog-cont-mas-items">
                                                            <p>Lo más visto</p>
                                                        </div>

                                                        <div className="cont-prin-movil-blog-cont-mas-items-todos">


                                                            {
                                                                !loadingFind ?
                                                                    blogsDataRecientes.length > 0 ?

                                                                        <>
                                                                            {
                                                                                blogsDataRecientes.map(item =>
                                                                                    <Link key={item._id} to={`/blog-detalles/${item._id}`}>
                                                                                        <div className="cont-prin-todos-img">
                                                                                            <div>
                                                                                                <img src={item.caratula} />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-prin-todos-p">
                                                                                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.</p>
                                                                                        </div>
                                                                                    </Link>
                                                                                )}
                                                                        </>
                                                                        :
                                                                        <p style={{ fontSize: '16px', fontWeight: 450 }}>Sin Información</p>
                                                                    :
                                                                    <div style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                                                        <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                                                                            <span className="sr-only"></span>
                                                                        </div>
                                                                    </div>
                                                            }


                                                        </div>
                                                    </div>
                                                </>

                                            </>

                                            :
                                            <div style={{ marginTop: '10px', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                        </Fragment>

                }
            </div>
        </div>
    )
}

export default DetalesBlog