import React, { Fragment, useEffect, useState } from 'react';
import './NuestrasPropiedades.css';
import '../Home/Home.css';

import Logo from '../../img/logo.png';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, NavLink, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


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
import Marker from '../../../src/img/iconos/marker.png';
import Etiqueta from '../../../src/img/iconos/etiqueta.png';

import Precio from '../../../src/img/iconos/precio.png';
import Tamaño from '../../../src/img/iconos/medida-terreno.png';
import Hastag from '../../../src/img/iconos/hastag.png';
import Home from '../../../src/img/iconos/home.png';





//Redux
import { useDispatch, useSelector } from 'react-redux';
import { findPropiedades } from '../../Redux/actions/propiedadesAction';




const NuestrasPropiedades = () => {


    const params = useParams();


    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)
    const { propiedadesData } = useSelector(state => state.propiedades);


    const [openMenu, setOpenMenu] = useState(false);
    const [inputSearch, setInputSearch] = useState("");
    const [dataArray, setDataArray] = useState([]);


    // console.log(propiedadesData.length)
    // console.log(dataArray)

    // console.log(params?.input ? params?.input : "")

    const Items = ({ currentItems }) => {
        return (
            <div className="cont-item-nuestras-propiedades-main">
                {currentItems &&
                    currentItems.map((item) => (
                        <Link to={`/descripcion-propiedad/${item._id}`} className="cont-item-nuestras-propiedades" key={item._id} title="Ver" >
                            <div className="cont-item-caratula_propiedad-item">
                                <img src={item.caratula_propiedad} />
                            </div>
                            <div className="cont-item-caratula_propiedad-item-title">
                                <label>{item.nombre}</label>
                            </div>

                            <div className="cont-item-caratula_propiedad-item-ubicacion">
                                <div>
                                    <img src={Marker} />
                                </div>
                                <strong>Ubicación </strong><label>{item.ciudadEstadoPais}</label>
                            </div>

                            <div className="cont-item-caratula_propiedad-item-etiqueta">
                                <div>
                                    <img src={Etiqueta} />
                                </div>
                                <label>{item?.tipoOferta?.nombre ? item?.tipoOferta?.nombre : ""}</label>
                            </div>

                            <div className="cont-item-detalles-item-folio-tipo-propiedad">
                                <div>
                                    <div className="cont-item-logo">
                                        <img src={Hastag} />
                                    </div>
                                    <div>
                                        <label>{item?.tipoOferta?.nombre ? item?.tipoOferta?.nombre : ""}</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="cont-item-logo">
                                        <img src={Home} />
                                    </div>
                                    <div>
                                        <label>{item?.identificadorPropiedad ? item?.identificadorPropiedad : ""}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="cont-item-detalles-item-metros-precio-propiedad">
                                <div>
                                    <div className="cont-item-logo">
                                        <img src={Tamaño} />
                                    </div>
                                    <div>
                                        <label>{item?.terreno ? item?.terreno : ""}</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="cont-item-logo">
                                        <img src={Precio} />
                                    </div>
                                    <div>
                                        <label>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(item?.precio ? item?.precio : 0)}</label>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        );
    }

    const PaginatedItems = ({ dataArrayPerPage }) => {

        const [itemOffset, setItemOffset] = useState(0);


        const endOffset = itemOffset + dataArrayPerPage;
        // console.log(`Loading dataArray from ${itemOffset} to ${endOffset}`);
        const currentItems = dataArray.slice(itemOffset, endOffset);

        const pageCount = Math.ceil(dataArray.length / dataArrayPerPage);


        // console.log("pageCount", pageCount)
        // console.log(currentItems)

        const handlePageClick = (event) => {

            const newOffset = (event.selected * dataArrayPerPage) % dataArray.length;
            // console.log(
            //     `User requested page number ${event.selected}, which is offset ${newOffset}`
            // );
            setItemOffset(newOffset);
        };


        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Siguiente"
                    onPageChange={handlePageClick}
                    marginPagesDisplayed={4}
                    // pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Anterior"
                    renderOnZeroPageCount={null}

                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </>
        );

    }

    useEffect(() => {
        dispatch(findPropiedades())
    }, [])

    useEffect(() => {
        if (propiedadesData.length > 0) {

            if (inputSearch !== "") {

                let result = propiedadesData.filter(item => item.nombre.toString().toLowerCase().includes(inputSearch.toLocaleLowerCase()) || item.identificadorPropiedad.toString().toLowerCase().includes(inputSearch.toLocaleLowerCase()) || item.ciudadEstadoPais.toString().toLowerCase().includes(inputSearch.toLocaleLowerCase()) || item.colonia.toString().toLowerCase().includes(inputSearch.toLocaleLowerCase()) || item.descripcion.toString().toLowerCase().includes(inputSearch.toLocaleLowerCase()) || item.tipoInmueble.nombre.toString().toLowerCase().includes(inputSearch.toLocaleLowerCase()) || item.tipoOferta.nombre.toString().toLowerCase().includes(inputSearch.toLocaleLowerCase()) || item.tipoPago.nombre.toString().toLowerCase().includes(inputSearch.toLocaleLowerCase()))
                setDataArray(result)

            } else {
                propiedadesData.length > 0 ? setDataArray(propiedadesData) : setDataArray([])
            }

        }
    }, [propiedadesData, inputSearch])

    useEffect(() => {
        if (params?.input ? params?.input : "" !== "") {
            setInputSearch(params?.input ? params?.input : "")
        }
    }, [params])

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

                            <div className="cont-div1-main-nuestrasPropiedades">

                                <h1>Simplificamos tu búsqueda</h1>
                                <div className="cont-search-container-nuestras-propiedades">
                                    <input onChange={(e) => {
                                        setInputSearch(e.target.value)
                                    }} name="inputSearch" value={inputSearch} type="text" placeholder="Buscar" />
                                </div>
                                <div className="cont-search-container-nuestras-propiedades-btn-buscar">
                                    <div>
                                        Buscar
                                    </div>
                                </div>

                                <PaginatedItems dataArrayPerPage={9} />

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



export default NuestrasPropiedades;