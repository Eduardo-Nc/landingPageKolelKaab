import React, { Fragment, useEffect, useState } from 'react';
import './Users.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import "moment/min/locales";
import 'moment/locale/es';

// components
import Header from '../../Components/header/Header';
import Sidebar from '../../Components/sidebar/Sidebar';
import Notifications from '../../Components/notifications/Notifications';
import DataTable from '../../Components/DataTable/DataTable';


//Bootstrap
import { Tabs, Tab, Modal, Button } from 'react-bootstrap';


//material-ui



//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirModalIn, abrirModalEd, abrirModalSe } from '../../Redux/actions/uiAction';


import { findUsers, findGenderUsers, findCivilStatusUsers, createUser, updateUser, deleteUser } from '../../Redux/actions/usersAction';
import { findRolesUsers } from '../../Redux/actions/rolesAction';
import { findOcupationsUsers } from '../../Redux/actions/ocupationsAction';



//Images
import Search from '../../img/search.png';


const Users = () => {

    const dispatch = useDispatch();

    const { name, rol, uid, idRol } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)
    const { usersData, genderData, civilStatusData } = useSelector(state => state.users);
    const { rolesDataUsers } = useSelector(state => state.roles);
    const { ocupationsDataUsers } = useSelector(state => state.ocupation);



    // Search
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    // DataTable
    const [data, setData] = useState([]);
    const [datosF, setDataF] = useState({
        _id: "",
        perfil: {
            nombre: "",
            apellidos: "",
            nombreUsuario: "",
            correo: "",
            contrasena: "",
            genero: "",
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
    const [title, setTitle] = useState("Usuario");
    const [columns, setColumns] = useState([{
        dataField: '_id',
        text: 'ID',
        hidden: true
    }, {
        dataField: 'perfil.nombre',
        text: 'Nombre(s)', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <label>{row.perfil.nombre + " " + row.perfil.apellidos}</label>
            );
        }
    },
    {
        dataField: 'perfil.correo',
        text: 'Correo', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        }
    },
    {
        dataField: 'perfil.genero',
        text: 'Género', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        }
    },
    {
        dataField: 'perfil.rol.nombre',
        text: 'Rol', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        }
    },
    {
        dataField: 'acciones',
        text: 'Acciones',
        headerAlign: 'center',
        headerStyle: {
            width: '220px',
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <div className="table-actions" >
                    <h5>
                        <Button style={{ background: 'none', border: 'none' }} onClick={() => seleccionarData(row, 'visualizar')} title="Visualizar" variant="warning"><i style={{ color: 'black', fontSize: '17px', marginTop: '15px' }} className="fas fa-eye"></i></Button>
                    </h5>
                    <h5>
                        <Button style={{ background: 'none', border: 'none' }} onClick={() => seleccionarData(row, 'editar')} title="Editar" variant="secondary"><i style={{ color: 'black', fontSize: '17px', marginTop: '15px' }} className="far fa-edit"></i></Button>
                    </h5>
                    <h5>
                        <Button style={{ background: 'none', border: 'none' }} onClick={() => eliminarData(row)} title="Eliminar" variant="danger"><i style={{ color: 'black', fontSize: '17px', marginTop: '15px' }} className="fas fa-trash-alt"></i></Button>
                    </h5>
                </div>
            );
        }
    }]);

    const [key, setKey] = useState("63e00b1e8bab4d4f7c675559");

    const ControlledTabs = ({ roles, users }) => {


        return (
            <Tabs
                style={{ fontWeight: 'bold', fontSize: '17px' }}
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                {roles.map(rol =>
                    <Tab key={rol._id} eventKey={rol._id} title={rol.nombre}>
                        <DataTable key={rol._id} columns={columns} data={data.length > 0 ? key === "63e00b1e8bab4d4f7c675559" ? data : data.filter(user => user.perfil.rol._id === key) : []} datosF={datosF} setDataF={setDataF} title={title} />
                    </Tab>
                )}
            </Tabs>
        );
    }


    const seleccionarData = (row, caso) => {

        if (row.perfil.rol._id === "63ddac35cce4e43d749383ab") {
            if (idRol === "63ddac35cce4e43d749383ab") {
                (caso === 'editar' ? dispatch(abrirModalEd(true)) : caso === 'insertar' ? dispatch(abrirModalIn()) : dispatch(abrirModalSe(true)))

                if (caso === 'editar') {

                    setDataF(row)

                } else if (caso === 'visualizar') {

                    setDataF(row)

                } else {
                    setDataF({})
                }
            } else {
                Swal.fire({
                    title: "Solo el Super administrador puede hacer cambios a este perfil",
                    icon: "warning",
                    confirmButtonText: "Aceptar",
                    timer: "3000"
                });
                return
            }
        } else {
            (caso === 'editar' ? dispatch(abrirModalEd(true)) : caso === 'insertar' ? dispatch(abrirModalIn()) : dispatch(abrirModalSe(true)))

            if (caso === 'editar') {

                setDataF(row)

            } else if (caso === 'visualizar') {

                setDataF(row)

            } else {
                setDataF({})
            }
        }
    }

    const handleChange = (e) => {
        setDataF({
            ...datosF,
            [e.target.name]: e.target.value
        })
    }

    const eliminarData = (row) => {

        if (row.perfil.rol._id === "63ddac35cce4e43d749383ab") {
            if (idRol === "63ddac35cce4e43d749383ab") {
                Swal.fire({
                    title: `Advertencia`,
                    text: `¿Realmente deseas borrar ${title} : ${row.perfil.nombre + " " + row.perfil.apellidos}?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(deleteUser(row._id))
                    }
                })
            } else {
                Swal.fire({
                    title: "Solo el Super administrador puede hacer cambios a este perfil",
                    icon: "warning",
                    confirmButtonText: "Aceptar",
                    timer: "3000"
                });
                return
            }

        } else {
            Swal.fire({
                title: `Advertencia`,
                text: `¿Realmente deseas borrar ${title} : ${row.perfil.nombre + " " + row.perfil.apellidos}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteUser(row._id))
                }
            })
        }
    }


    const saveData = () => {

        datosF.status = true;

        if (datosF.perfil.fecha_nacimiento === "") {
            Swal.fire({
                title: "Fecha de nacimiento es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.perfil.correo === "") {
            Swal.fire({
                title: "Correo es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.perfil.nombre === "") {
            Swal.fire({
                title: "Nombre es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.perfil.rol === "") {
            Swal.fire({
                title: "Rol es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.perfil.apellidos === "") {
            Swal.fire({
                title: "Apellidos es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.perfil.numeroCelular === "") {
            Swal.fire({
                title: "Celular es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else {
            if (datosF.perfil.genero === "Masculino") {
                datosF.perfil.fotoPerfil = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                dispatch(createUser(datosF))
            } else if (datosF.perfil.genero === "Femenino") {
                datosF.perfil.fotoPerfil = "https://cdn-icons-png.flaticon.com/512/3135/3135789.png";
                dispatch(createUser(datosF))
            } else {
                datosF.perfil.fotoPerfil = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                dispatch(createUser(datosF))
            }
        }
    }



    const updateData = () => {

        if (datosF.perfil.fotoPerfil === "" || datosF.perfil.fotoPerfil === undefined) {
            if (datosF.perfil.genero === "Masculino") {
                datosF.perfil.fotoPerfil = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                dispatch(updateUser(datosF, true))
            } else if (datosF.perfil.genero === "Femenino") {
                datosF.perfil.fotoPerfil = "https://cdn-icons-png.flaticon.com/512/3135/3135789.png";
                dispatch(updateUser(datosF, true))
            } else {
                datosF.perfil.fotoPerfil = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                dispatch(updateUser(datosF, true))
            }
        } else {
            dispatch(updateUser(datosF, true))
        }
    }



    useEffect(() => {
        dispatch(findUsers(false))
        dispatch(findRolesUsers())
        return () => {
            dispatch(findUsers(true))
        }
    }, [])

    useEffect(() => {
        if (search !== "") {
            if (usersData.length > 0) {
                let result = usersData.filter(item => item.perfil.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.perfil.apellidos.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.perfil.correo.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.perfil.genero.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.perfil.rol.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()))
                setData(result)
            }
        } else {
            usersData.length > 0 ? setData(usersData) : setData([])
        }

    }, [search])

    useEffect(() => {
        if (!loadingFind && data.length === 0) {

        } else {
            if (search === "") {
                usersData.length > 0 ? setData(usersData) : setData([])
            }
        }
    }, [data, usersData])

    // console.log(datosF)

    return (
        <Fragment>
            <div className="cont-all-principal-dashboard">
                <Header />
                <Sidebar />
                <Notifications />

                <div className="cont-all-user-scroll animate__animated animate__fadeInUp animate__faster 2s">
                    <div className="cont-header-dash-users">
                        <div>
                            <h1>Usuarios</h1>
                            <p>{usersData.length} {usersData.length > 1 ? "Usuarios" : "Usuario"}</p>
                        </div>

                        <div className="contenedor-input-search-all">
                            <div className="cont-all-principal-search">
                                <div className="cont-all-input-search">
                                    <div className="cont-ico-input-search">
                                        <img src={Search} alt="lupa" />
                                    </div>
                                    <input onChange={handleSearchChange} value={search} type="text" placeholder="Buscar usuario" />
                                </div>
                            </div>

                            <div className="cont-btn-input-add">
                                <div onClick={() => seleccionarData("", 'insertar')}>
                                    <i className="fas fa-plus"></i>
                                    <label>Agregar</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                    <div className="cont-prin-all-table">
                        {loadingFind ?
                            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className="spinner-border" style={{ width: "3rem", height: "3rem", color: "black" }} role="status">
                                    <span style={{ color: "black" }} className="sr-only">Cargando...</span>
                                </div>
                            </div>
                            :
                            <ControlledTabs roles={rolesDataUsers} users={data} />
                            // <></>
                        }
                    </div>

                </div>

            </div>


            <Modal show={showModalInsert} onHide={() => {
                dispatch(abrirModalIn())
                setDataF({})
            }} >
                <Modal.Header style={{ background: "black", color: 'white' }}>
                    <Modal.Title style={{ fontSize: '20px' }}>Agregar {title}</Modal.Title>
                    <button onClick={() => {
                        dispatch(abrirModalIn())
                        setDataF({})
                    }}
                        style={{ width: '25px', height: '25px', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span style={{ color: 'black', textAlign: 'center', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-5px' }} aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <form className="cont-all-form-modal">
                        <label>Nombre(s)</label>
                        <input type="text" name="name" placeholder="Nombre(s)" value={datosF?.perfil?.nombre ? datosF?.perfil?.nombre : ""} onChange={(e) => {
                            setDataF({
                                ...datosF,
                                perfil: {
                                    ...datosF.perfil, nombre: e.target.value
                                }
                            })
                        }} disabled={false} />

                        <label>Apellidos</label>
                        <input type="text" name="apellidos" placeholder="Apellidos" value={datosF?.perfil?.apellidos ? datosF?.perfil?.apellidos : ""} onChange={(e) => {
                            setDataF({
                                ...datosF,
                                perfil: {
                                    ...datosF.perfil, apellidos: e.target.value
                                }
                            })
                        }} disabled={false} />

                        <label>Correo</label>
                        <input type="email" name="correo" placeholder="Correo" value={datosF?.perfil?.correo ? datosF?.perfil?.correo : ""} onChange={(e) => {
                            setDataF({
                                ...datosF,
                                perfil: {
                                    ...datosF.perfil, correo: e.target.value
                                }
                            })
                        }} disabled={false} />

                        <label>Celular</label>
                        <input type="text" maxLength={13} name="numeroCelular" placeholder="Celular" value={datosF?.perfil?.numeroCelular ? datosF?.perfil?.numeroCelular : ""} onChange={(e) => {
                            setDataF({
                                ...datosF,
                                perfil: {
                                    ...datosF.perfil, numeroCelular: e.target.value
                                }
                            })
                        }} disabled={false} />

                        <label>Fecha de nacimiento</label>
                        <input type="datetime-local" name="birthday" placeholder="Fecha de nacimiento" value={datosF?.perfil?.fecha_nacimiento ? moment(datosF?.perfil?.fecha_nacimiento).format("YYYY-MM-DDThh:mm") : ""} onChange={(e) => {
                            setDataF({
                                ...datosF,
                                perfil: {
                                    ...datosF.perfil, fecha_nacimiento: e.target.value
                                }
                            })
                        }} disabled={false} />

                        {/* <label>Contraseña</label>
                        <input type="password" name="contrasena" placeholder="Contraseña" value={datosF?.perfil?.contrasena ? datosF?.perfil?.contrasena : ""} onChange={(e) => {
                            setDataF({
                                ...datosF,
                                perfil: {
                                    ...datosF.perfil, contrasena: e.target.value
                                }
                            })
                        }} disabled={false} /> */}

                        <label>Género</label>
                        <select onChange={(e) => {
                            setDataF({
                                ...datosF,
                                perfil: {
                                    ...datosF.perfil, genero: e.target.value
                                }
                            })
                        }} required value={datosF?.perfil?.genero ? datosF?.perfil?.genero : ""} name="genero" >
                            <option value="" defaultValue>Seleccione una opción</option>
                            <option key="Masculino" value="Masculino" >Masculino</option>
                            <option key="Femenino" value="Femenino" >Femenino</option>
                            <option key="Otro" value="Otro" >Otro</option>
                        </select>

                        {
                            idRol === "63ddabebcce4e43d749383a7" ?
                                <Fragment>
                                    <label>Rol</label>
                                    <select onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, rol: e.target.value
                                            }
                                        })
                                    }} required value={datosF?.perfil?.rol ? datosF?.perfil?.rol : ""} name="rol">
                                        <option value="" defaultValue>Seleccione una opción</option>
                                        {rolesDataUsers.filter(role => role._id !== "63e00b1e8bab4d4f7c675559" && role._id !== "63ddac35cce4e43d749383ab").map(rol =>
                                            < option key={rol._id} value={rol._id} > {rol.nombre}</option>
                                        )}
                                    </select>
                                </Fragment>
                                :
                                <Fragment>
                                    <label>Rol</label>
                                    <select onChange={(e) => {
                                        setDataF({
                                            ...datosF,
                                            perfil: {
                                                ...datosF.perfil, rol: e.target.value
                                            }
                                        })
                                    }} required value={datosF?.perfil?.rol ? datosF?.perfil?.rol : ""} name="rol">
                                        <option value="" defaultValue>Seleccione una opción</option>
                                        {rolesDataUsers.filter(role => role._id !== "63e00b1e8bab4d4f7c675559").map(rol =>
                                            < option key={rol._id} value={rol._id} > {rol.nombre}</option>
                                        )}
                                    </select>
                                </Fragment>
                        }


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="cont-footer-botones">
                        <input id="cancel" onClick={() => {
                            dispatch(abrirModalIn())
                            setDataF({})
                        }} type="button" value="Cancelar" />

                        {
                            loading ?
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Cargando...</span>
                                </div>
                                :
                                <input id="save" type="button" onClick={() => saveData()} value="Guardar" />
                        }
                    </div>
                </Modal.Footer>
            </Modal>




            {
                showModalEdit ?
                    <Modal show={showModalEdit} onHide={() => {
                        dispatch(abrirModalEd(false))
                        dispatch(abrirModalSe(false, "editar"))
                        setDataF({})
                    }} >
                        <Modal.Header style={{ background: "black", color: 'white' }}>

                            {showModalSee ?
                                <Modal.Title style={{ fontSize: '20px' }}>Visualizar {title}</Modal.Title>
                                :
                                <Modal.Title style={{ fontSize: '20px' }}>Editar {title}</Modal.Title>
                            }

                            <button onClick={() => {
                                dispatch(abrirModalEd(false))
                                dispatch(abrirModalSe(false, "editar"))
                                setDataF({})
                            }}
                                style={{ width: '25px', height: '25px', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span style={{ color: 'black', textAlign: 'center', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-5px' }} aria-hidden="true">&times;</span>
                            </button>

                        </Modal.Header>
                        <Modal.Body>

                            <form className="cont-all-form-modal">
                                <label>Nombre(s)</label>
                                <input type="text" name="name" placeholder="Name" value={datosF?.perfil?.nombre ? datosF?.perfil?.nombre : ""} onChange={(e) => {
                                    setDataF({
                                        ...datosF,
                                        perfil: {
                                            ...datosF.perfil, nombre: e.target.value
                                        }
                                    })
                                }} disabled={showModalSee ? true : false} />

                                <label>Apellidos</label>
                                <input type="text" name="apellidos" placeholder="Apellidos" value={datosF?.perfil?.apellidos ? datosF?.perfil?.apellidos : ""} onChange={(e) => {
                                    setDataF({
                                        ...datosF,
                                        perfil: {
                                            ...datosF.perfil, apellidos: e.target.value
                                        }
                                    })
                                }} disabled={showModalSee ? true : false} />

                                <label>Correo</label>
                                <input type="email" name="correo" placeholder="Correo" value={datosF?.perfil?.correo ? datosF?.perfil?.correo : ""} onChange={(e) => {
                                    setDataF({
                                        ...datosF,
                                        perfil: {
                                            ...datosF.perfil, correo: e.target.value
                                        }
                                    })
                                }} disabled={showModalSee ? true : false} />

                                <label>Celular</label>
                                <input type="text" maxLength={13} name="numeroCelular" placeholder="Celular" value={datosF?.perfil?.numeroCelular ? datosF?.perfil?.numeroCelular : ""} onChange={(e) => {
                                    setDataF({
                                        ...datosF,
                                        perfil: {
                                            ...datosF.perfil, numeroCelular: e.target.value
                                        }
                                    })
                                }} disabled={showModalSee ? true : false} />

                                <label>Fecha de nacimiento</label>
                                <input type="datetime-local" name="birthday" placeholder="Fecha de nacimiento" value={datosF?.perfil?.fecha_nacimiento ? moment(datosF?.perfil?.fecha_nacimiento).format("YYYY-MM-DDThh:mm") : ""} onChange={(e) => {
                                    setDataF({
                                        ...datosF,
                                        perfil: {
                                            ...datosF.perfil, fecha_nacimiento: e.target.value
                                        }
                                    })
                                }} disabled={showModalSee ? true : false} />

                                <label>Contraseña</label>
                                <input type="password" name="contrasena" placeholder="Contraseña" value={datosF?.perfil?.contrasena ? datosF?.perfil?.contrasena : ""} onChange={(e) => {
                                    setDataF({
                                        ...datosF,
                                        perfil: {
                                            ...datosF.perfil, contrasena: e.target.value
                                        }
                                    })
                                }} disabled={showModalSee ? true : false} />

                                <label>Género</label>
                                <select disabled={showModalSee ? true : false} onChange={(e) => {
                                    setDataF({
                                        ...datosF,
                                        perfil: {
                                            ...datosF.perfil, genero: e.target.value
                                        }
                                    })
                                }} required value={datosF?.perfil?.genero ? datosF?.perfil?.genero : ""} name="genero" >
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    <option key="Masculino" value="Masculino" >Masculino</option>
                                    <option key="Femenino" value="Femenino" >Femenino</option>
                                    <option key="Otro" value="Otro" >Otro</option>
                                </select>


                                {
                                    idRol === "63ddabebcce4e43d749383a7" ?
                                        <Fragment>
                                            <label>Rol</label>
                                            <select onChange={(e) => { setDataF({ ...datosF, perfil: { ...datosF.perfil, rol: { ...datosF.rol, _id: e.target.value } } }) }} required value={datosF?.perfil?.rol ? datosF?.perfil?.rol?._id : ""} name="rol" disabled={showModalSee ? true : false}>
                                                <option value="" defaultValue>Seleccione una opción</option>
                                                {rolesDataUsers.filter(role => role._id !== "63e00b1e8bab4d4f7c675559" && role._id !== "63ddac35cce4e43d749383ab").map(rol =>
                                                    < option key={rol._id} value={rol._id} > {rol.nombre}</option>
                                                )}
                                            </select>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <label>Rol</label>
                                            <select onChange={(e) => { setDataF({ ...datosF, perfil: { ...datosF.perfil, rol: { ...datosF.rol, _id: e.target.value } } }) }} required value={datosF?.perfil?.rol ? datosF?.perfil?.rol?._id : ""} name="rol" disabled={showModalSee ? true : false}>
                                                <option value="" defaultValue>Seleccione una opción</option>
                                                {rolesDataUsers.filter(role => role._id !== "63e00b1e8bab4d4f7c675559").map(rol =>
                                                    < option key={rol._id} value={rol._id} > {rol.nombre}</option>
                                                )}
                                            </select>
                                        </Fragment>
                                }



                            </form>

                        </Modal.Body>
                        {showModalSee ?
                            <Modal.Footer>
                                <div style={{ justifyContent: 'flex-end' }} className="cont-footer-botones">
                                    <input onClick={() => dispatch(abrirModalSe(false, "editar"))} style={{ background: 'grey' }} type="button" value="Edit" />
                                </div>
                            </Modal.Footer>
                            :
                            <Modal.Footer>
                                <div className="cont-footer-botones">
                                    <input onClick={() => {
                                        dispatch(abrirModalEd(false))
                                        setDataF({})
                                    }} style={{ background: '#fe0000' }} type="button" value="Cancelar" />

                                    {
                                        loading ?
                                            <div className="spinner-border" role="status">
                                                <span className="sr-only">Cargando...</span>
                                            </div>
                                            :
                                            <input style={{ background: '#00c949' }} onClick={() => updateData()} type="button" value="Actualizar" />
                                    }

                                </div>
                            </Modal.Footer>
                        }

                    </Modal>
                    : ""
            }

        </Fragment >
    )
}


export default Users;