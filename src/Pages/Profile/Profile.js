import React, { Fragment, useEffect, useState } from 'react';
import './Profile.css';
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
import { updateUserPerfil } from '../../Redux/actions/usersAction';




//Images
import Search from '../../img/search.png';


const Profile = () => {

    const dispatch = useDispatch();

    const { name, surnames, email, rol, uid, photo, dataUserDB } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)



    // Search

    const [edit, setEdit] = useState(false)
    const [datosF, setDataF] = useState({
        _id: "",
        perfil: {
            nombre: "",
            apellidos: "",
            nombreUsuario: "",
            correo: "",
            contrasena: "",
            genero: "",
            numeroCelular: "",
            fecha_nacimiento: "",
            fotoPerfil: ""
        },
        infAdicional: {
            tipoColaborador: "",
            estadoColaborador: "",
            municipioColaborador: "",
            direccionColaborador: "",
        },
        redesSociales: {
            facebook: "",
            website: "",
        }

    });

    const handleSearchChange = (e) => {
        setDataF({
            ...datosF,
            [e.target.name]: e.target.value,
        })
    }

    const saveInfo = () => {
        if (datosF.perfil.correo === "") {
            Swal.fire({
                title: "Correo es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        }
        if (datosF.perfil.contrasena === "") {
            Swal.fire({
                title: "Contraseña es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        }


        dispatch(updateUserPerfil(datosF))
        setEdit(false)
    }

    // console.log(datosF)

    useEffect(() => {
        setDataF(dataUserDB)
    }, [])


    return (

        <div className="cont-all-principal-dashboard">
            <Header />
            <Sidebar />
            <Notifications />

            <div className="cont-all-user-scroll animate__animated animate__fadeInUp animate__faster 2s">
                <div className="cont-header-dash-users">
                    <div className="cont-prin-data-user">
                        <div className="cont-header-edit-profile">
                            <div className="cont-img-name-email-user">
                                <div className="cont-img-profile">
                                    <img src={photo} alt="" />
                                </div>
                                <div className="cont-prin-name-email-user">
                                    <h4>{name} {surnames}</h4>
                                    <label>{email}</label>
                                </div>
                            </div>
                            <div className="cont-input-user">
                                <div onClick={() => {
                                    if (edit === false) {
                                        setEdit(!edit)
                                    } else {
                                        saveInfo()
                                    }

                                }}>
                                    <label>{edit === false ? "Editar" : "Guardar"}</label>
                                </div>

                                {edit === true &&
                                    <div style={{ backgroundColor: 'red', marginLeft: '10px' }} onClick={() => {
                                        setEdit(false)
                                    }}>
                                        <label>Cancelar</label>
                                    </div>
                                }

                            </div>
                        </div>
                        <div className="cont-body-dash-users">
                            <strong>Datos Generales</strong>
                            <div className='cont-div-inputs'>
                                <div>
                                    <label>Nombre(s)</label>
                                    <input onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, nombre: e.target.value
                                            }
                                        })
                                    }} disabled={!edit} name="nombre" value={datosF?.perfil?.nombre ? datosF?.perfil?.nombre : ""} type="text" placeholder="Nombre(s)" />
                                </div>
                                <div>
                                    <label>Apellidos</label>
                                    <input onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, apellidos: e.target.value
                                            }
                                        })
                                    }} disabled={!edit} name="apellidos" value={datosF?.perfil?.apellidos ? datosF?.perfil?.apellidos : ""} type="text" placeholder="Apellidos" />
                                </div>
                            </div>
                            <div className='cont-div-inputs'>
                                <div>
                                    <label>Genero</label>

                                    <select onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, genero: e.target.value
                                            }
                                        })
                                    }} required disabled={!edit} value={datosF?.perfil?.genero ? datosF?.perfil?.genero : ""} name="genero" >
                                        <option value="" defaultValue>Seleccione una opción</option>
                                        <option key="Masculino" value="Masculino" >Masculino</option>
                                        <option key="Femenino" value="Femenino" >Femenino</option>
                                        <option key="Otro" value="Otro" >Otro</option>
                                    </select>

                                </div>
                                <div>
                                    <label>Fecha de nacimiento</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, fecha_nacimiento: e.target.value
                                            }
                                        })
                                    }} name="fecha_nacimiento" value={datosF?.perfil?.fecha_nacimiento ? moment(datosF?.perfil?.fecha_nacimiento).format("YYYY-MM-DDThh:mm") : ""} type="datetime-local" placeholder="Fecha Nacimiento" />
                                </div>
                            </div>
                            <div className='cont-div-inputs'>
                                <div>
                                    <label>Correo</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, correo: e.target.value
                                            }
                                        })
                                    }} name="correo" value={datosF?.perfil?.correo ? datosF?.perfil?.correo : ""} type="email" placeholder="Correo" />
                                </div>
                                <div>
                                    <label>Contraseña</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, contrasena: e.target.value
                                            }
                                        })
                                    }} name="contrasena" value={datosF?.perfil?.contrasena ? datosF?.perfil?.contrasena : ""} type="password" placeholder="Contraseña" />
                                </div>
                            </div>

                            <div className='cont-div-inputs'>
                                <div>
                                    <label>Celular</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, numeroCelular: e.target.value
                                            }
                                        })
                                    }} name="numeroCelular" value={datosF?.perfil?.numeroCelular ? datosF?.perfil?.numeroCelular : ""} type="text" placeholder="Celular" />
                                </div>
                            </div>

                            <strong style={{ marginTop: '20px' }}>Información Adicional</strong>

                            <div className='cont-div-inputs'>
                                <div>
                                    <label>Tipo de colaborador</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, infAdicional: { ...datosF.perfil.infAdicional, tipoColaborador: e.target.value }
                                            }
                                        })
                                    }} name="tipoColaborador" value={datosF?.perfil?.infAdicional?.tipoColaborador ? datosF.perfil.infAdicional.tipoColaborador : ""} type="text" placeholder="Tipo de colaborador" />
                                </div>
                                <div>
                                    <label>Estado</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, infAdicional: { ...datosF.perfil.infAdicional, estadoColaborador: e.target.value }
                                            }
                                        })
                                    }} name="estadoColaborador" value={datosF?.perfil?.infAdicional?.estadoColaborador ? datosF.perfil.infAdicional.estadoColaborador : ""} type="text" placeholder="Estado" />
                                </div>
                            </div>
                            <div className='cont-div-inputs'>
                                <div>
                                    <label>Municipio</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, infAdicional: { ...datosF.perfil.infAdicional, municipioColaborador: e.target.value }
                                            }
                                        })
                                    }} name="municipioColaborador" value={datosF?.perfil?.infAdicional?.municipioColaborador ? datosF.perfil.infAdicional.municipioColaborador : ""} type="text" placeholder="Municipio" />
                                </div>
                                <div>
                                    <label>Dirección</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, infAdicional: { ...datosF.perfil.infAdicional, direccionColaborador: e.target.value }
                                            }
                                        })
                                    }} name="direccionColaborador" value={datosF?.perfil?.infAdicional?.direccionColaborador ? datosF.perfil.infAdicional.direccionColaborador : ""} type="text" placeholder="Dirección" />
                                </div>
                            </div>

                            <strong style={{ marginTop: '20px' }}>Redes Sociales</strong>

                            <div className='cont-div-inputs'>
                                <div>
                                    <label>Facebook</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, redesSociales: { ...datosF.perfil.redesSociales, facebook: e.target.value }
                                            }
                                        })
                                    }}
                                        name="facebook" value={datosF?.perfil?.redesSociales?.facebook ? datosF.perfil.redesSociales.facebook : ""} type="text" placeholder="Facebook" />
                                </div>
                                <div>
                                    <label>Website</label>
                                    <input disabled={!edit} onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, redesSociales: { ...datosF.perfil.redesSociales, website: e.target.value }
                                            }
                                        })
                                    }} name="website" value={datosF?.perfil?.redesSociales?.website ? datosF.perfil.redesSociales.website : ""} type="text" placeholder="Website" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}


export default Profile;