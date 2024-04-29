import React, { Fragment, useEffect, useState } from 'react';
import './Cotizador.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';


// components
import Header from '../../Components/header/Header';
import Sidebar from '../../Components/sidebar/Sidebar';
import Notifications from '../../Components/notifications/Notifications';



//Bootstrap
import { Button, Modal } from 'react-bootstrap';



//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirModalIn, abrirModalEd, abrirModalSe } from '../../Redux/actions/uiAction';
import { findDesarrollos } from '../../Redux/actions/desarrollosAction';




//Images
import Search from '../../img/search.png';


const Cotizador = () => {

    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)
    const { desarrollosData } = useSelector(state => state.desarrollos);



    // Search
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }


    const [data, setData] = useState([]);
    const [datosF, setDataF] = useState([]);

    useEffect(() => {
        if (search !== "") {
            if (desarrollosData.length > 0) {
                let result = desarrollosData.filter(item => item.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()))
                setData(result)
            }
        } else {
            desarrollosData.length > 0 ? setData(desarrollosData) : setData([])
        }

    }, [search])

    useEffect(() => {
        if (!loadingFind && data.length === 0) {

        } else {
            if (search === "") {
                desarrollosData.length > 0 ? setData(desarrollosData) : setData([])
            }
        }
    }, [data, desarrollosData])


    useEffect(() => {
        dispatch(findDesarrollos(false))
        return () => {
            dispatch(findDesarrollos(true))
        }
    }, [])


    return (

        <div className="cont-all-principal-dashboard">
            <Header />
            <Sidebar />
            <Notifications />

            <div className="cont-all-user-scroll animate__animated animate__fadeInUp animate__faster 2s">
                <div className="cont-header-dash-users">
                    <div>
                        <h1>Cotizador</h1>
                    </div>
                    <div className="contenedor-input-search-all">
                        <div className="cont-all-principal-search">
                            <div className="cont-all-input-search">
                                <div className="cont-ico-input-search">
                                    <img src={Search} alt="lupa" />
                                </div>
                                <input onChange={handleSearchChange} value={search} type="text" placeholder="Buscar desarrollo" />
                            </div>
                        </div>

                        <div className="cont-btn-input-add">
                            <div>
                                <i className="fas fa-search"></i>
                                <label>Buscar</label>
                            </div>
                        </div>
                    </div>

                    <div className="cont-prin-all-desarrollos-pre-cotizador">
                        {data.map((item) =>
                            <Link key={item._id} to={{ pathname: `/cotizador-interactivo/${item._id}` }} title="Seleccionar" className="cont-item-list-desarrollos zoom">

                                <div className="cont-item-list-img">
                                    <img src={item.caratula} alt="Logo" />
                                </div>

                                <div className="cont-item-list-nombre">
                                    <h3>{item.nombre}</h3>
                                </div>

                            </Link>
                        )}

                        {!loadingFind && data.length === 0 &&
                            <h3>Sin resultados</h3>
                        }
                    </div>

                </div>


            </div>

        </div>


    )
}


export default Cotizador;