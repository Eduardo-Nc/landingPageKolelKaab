import React, { Fragment, useEffect, useState } from 'react';
import './Settings.css';
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



//Images
import Search from '../../img/search.png';


const Settings = () => {

    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)



    // Search
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }


    const [data, setData] = useState([]);
    const [datosF, setDataF] = useState([]);


    return (

        <div className="cont-all-principal-dashboard">
            <Header />
            <Sidebar />
            <Notifications />

            <div className="cont-all-user-scroll animate__animated animate__fadeInUp animate__faster 2s">
                <div className="cont-header-dash-users">
                    <div>
                        <h1>Configuración</h1>
                        <p></p>
                    </div>
                </div>



            </div>

        </div>


    )
}


export default Settings;