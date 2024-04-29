import React, { Fragment, useEffect, useState } from 'react';
import './Lotes.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import Pdf from '../../img/pdf.png';

// components
import Header from '../../Components/header/Header';
import Sidebar from '../../Components/sidebar/Sidebar';
import Notifications from '../../Components/notifications/Notifications';
import DataTable from '../../Components/DataTable/DataTable';


//Bootstrap
import { Button, Modal } from 'react-bootstrap';



//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirModalIn, abrirModalEd, abrirModalSe } from '../../Redux/actions/uiAction';
import { findLotes, createLote, updateLote, deleteLote } from '../../Redux/actions/lotesAction';
import { findDesarrollos2, findEtapaDesarrollos, findEstadoLotes } from '../../Redux/actions/desarrollosAction';



// Utikls
import { saveFileAws, saveFileArrayAws } from '../../../src/utils/uploadAws';

//Images
import Search from '../../img/search.png';



const Lotes = () => {

    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)
    const { etapaDesarrolloData, estadoLoteData, desarrollosData } = useSelector(state => state.desarrollos);
    const { lotesData } = useSelector(state => state.lotes);



    // Search
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }


    const [title, setTitle] = useState("Desarrollo");
    const [data, setData] = useState([]);
    const [datosF, setDataF] = useState({
        nombre: "",
        metrosCuadrados: "",
        precioMetroCuadrado: "",
        precioTotal: "",
        desarrollo: "",
        etapaDesarrollo: "",
        estadoLote: "",
        status: true
    });

    const [columns, setColumns] = useState([{
        dataField: '_id',
        text: 'ID',
        hidden: true
    }, {
        dataField: 'nombre',
        text: 'Número Lote', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <label>{row.nombre}</label>
            );
        }
    },
    {
        dataField: 'etapaDesarrollo',
        text: 'Etapa', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <label>{row.etapaDesarrollo.nombre}</label>
            );
        }
    },
    {
        dataField: 'desarrollo',
        text: 'Desarrollo', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <label>{row.desarrollo.nombre}</label>
            );
        }
    },
    {
        dataField: 'precioTotal',
        text: 'Precio', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <label>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(row.precioTotal ? row.precioTotal : 0)}</label>
            );
        }
    },
    {
        dataField: 'estadoLote',
        text: 'Estatus', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                row.estadoLote?.nombre === "Vendido" ?
                    <div className="alert alert-danger" role="alert">
                        {row.estadoLote?.nombre}
                    </div>
                    : row.estadoLote?.nombre === "Reservado" ?
                        <div className="alert alert-primary" role="alert">
                            {row.estadoLote?.nombre}
                        </div>
                        : row.estadoLote?.nombre === "Disponible" ?
                            <div className="alert alert-secondary" role="alert">
                                {row.estadoLote?.nombre}
                            </div>
                            :
                            ""
            );
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


    const seleccionarData = (row, caso) => {

        (caso === 'editar' ? dispatch(abrirModalEd(true)) : caso === 'insertar' ? dispatch(abrirModalIn()) : dispatch(abrirModalSe(true)))

        if (caso === 'editar') {

            setDataF(row)

        } else if (caso === 'visualizar') {

            setDataF(row)

        } else {
            setDataF({})
        }

    }

    // console.log(datosF)

    const eliminarData = (row) => {

        Swal.fire({
            title: `Advertencia`,
            text: `¿Realmente deseas borrar el ${title} : ${row.identificadorPropiedad}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteLote(row._id))
            }
        })
    }



    const saveData = () => {

        datosF.status = true;

        if (datosF.nombre === "") {
            Swal.fire({
                title: "Nombre es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.metrosCuadrados === "") {
            Swal.fire({
                title: "Metros Cuadrados es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.precioMetroCuadrado === "") {
            Swal.fire({
                title: "Precio Metro Cuadrado es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.precioTotal === "") {
            Swal.fire({
                title: "Precio Total es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.desarrollo === "") {
            Swal.fire({
                title: "Desarrollo es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.etapaDesarrollo === "") {
            Swal.fire({
                title: "Etapa Desarrollo es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.estadoLote === "") {
            Swal.fire({
                title: "Estado Lote es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else {

            dispatch(createLote(datosF))
        }
    }




    const updateData = () => {

        dispatch(updateLote(datosF))

    }

    const handleChange = (e) => {
        setDataF({
            ...datosF,
            [e.target.name]: e.target.value
        })
    }

    const selectedFile = async (e) => {

        if (e.target.files.length !== 0) {

            if (e.target.name === "caratula") {
                setDataF({
                    ...datosF,
                    caratula: e.target.files[0],
                })

                let url = await saveFileAws(e.target.files[0])
                console.log(url)

                setDataF({
                    ...datosF,
                    caratulaData: e.target.files[0],
                    [e.target.name]: url
                })


            } else if (e.target.name === "brochure") {
                setDataF({
                    ...datosF,
                    brochureData: e.target.files[0],
                })

                let url = await saveFileAws(e.target.files[0])
                console.log(url)

                setDataF({
                    ...datosF,
                    brochureData: e.target.files[0],
                    [e.target.name]: url
                })

            } else if (e.target.name === "masterPlan") {
                setDataF({
                    ...datosF,
                    masterPlanData: e.target.files[0],
                })

                let url = await saveFileAws(e.target.files[0])
                console.log(url)

                setDataF({
                    ...datosF,
                    masterPlanData: e.target.files[0],
                    [e.target.name]: url
                })
            } else if (e.target.name === "listaDisponibilidad") {
                setDataF({
                    ...datosF,
                    listaDisponibilidadData: e.target.files[0],
                })

                let url = await saveFileAws(e.target.files[0])
                console.log(url)

                setDataF({
                    ...datosF,
                    listaDisponibilidadData: e.target.files[0],
                    [e.target.name]: url
                })
            }
        }
    }



    useEffect(() => {
        dispatch(findDesarrollos2(false))

        dispatch(findLotes(false))
        dispatch(findEtapaDesarrollos(false))
        dispatch(findEstadoLotes(false))
        return () => {
            dispatch(findDesarrollos2(true))

            dispatch(findLotes(true))
            dispatch(findEtapaDesarrollos(true))
            dispatch(findEstadoLotes(true))
        }
    }, [])





    useEffect(() => {
        if (search !== "") {
            if (lotesData.length > 0) {
                let result = lotesData.filter(item => item.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.desarrollo.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.estadoLote.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()))
                setData(result)
            }
        } else {
            lotesData.length > 0 ? setData(lotesData) : setData([])
        }

    }, [search])

    useEffect(() => {
        if (!loadingFind && data.length === 0) {

        } else {
            if (search === "") {
                lotesData.length > 0 ? setData(lotesData) : setData([])
            }
        }
    }, [data, lotesData])

    console.log(datosF)

    return (
        <Fragment>
            <div className="cont-all-principal-dashboard">
                <Header />
                <Sidebar />
                <Notifications />

                <div className="cont-all-user-scroll animate__animated animate__fadeInUp animate__faster 2s">
                    <div className="cont-header-dash-users">
                        <div>
                            <h1>Lotes</h1>
                            <p>{lotesData.length} {lotesData.length > 1 ? "Lotes" : "Lote"}</p>
                        </div>

                        <div className="contenedor-input-search-all">
                            <div className="cont-all-principal-search">
                                <div className="cont-all-input-search">
                                    <div className="cont-ico-input-search">
                                        <img src={Search} alt="lupa" />
                                    </div>
                                    <input onChange={handleSearchChange} value={search} type="text" placeholder="Buscar lote" />
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
                            <DataTable columns={columns} data={data} datosF={datosF} setDataF={setDataF} title={title} />
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

                        <label className="inputFormLabel">Número Lote</label>
                        <input type="text" className="inputForm" autoComplete="off" value={datosF?.nombre} name="nombre" onChange={handleChange} placeholder="" required ></input>

                        <label className="inputFormLabel">Metros Cuadrados</label>
                        <input type="text" className="inputForm" autoComplete="off" value={datosF?.metrosCuadrados} name="metrosCuadrados" onChange={handleChange} placeholder="" required ></input>

                        <label className="inputFormLabel">Precio Metro Cuadrado</label>
                        <input type="text" className="inputForm" autoComplete="off" value={datosF?.precioMetroCuadrado} name="precioMetroCuadrado" onChange={handleChange} placeholder="" required ></input>

                        <label className="inputFormLabel">Desarrollo</label>
                        <select className="inputForm" value={datosF?.desarrollo} onChange={handleChange} name="desarrollo" >
                            <option value="" defaultValue>Seleccione una opción</option>
                            {desarrollosData?.map(item =>
                                <option key={item._id} value={item._id} > {item.nombre}</option>
                            )}
                        </select>

                        <label className="inputFormLabel">Etapa</label>
                        <select className="inputForm" value={datosF?.etapaDesarrollo} onChange={handleChange} name="etapaDesarrollo" >
                            <option value="" defaultValue>Seleccione una opción</option>
                            {etapaDesarrolloData?.map(item =>
                                <option key={item._id} value={item._id} > {item.nombre}</option>
                            )}
                        </select>

                        <label className="inputFormLabel">Estado</label>
                        <select className="inputForm" value={datosF?.estadoLote} onChange={handleChange} name="estadoLote" >
                            <option value="" defaultValue>Seleccione una opción</option>
                            {estadoLoteData?.map(item =>
                                <option key={item._id} value={item._id} > {item.nombre}</option>
                            )}
                        </select>

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

                                <label className="inputFormLabel">Número Lote</label>
                                <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.nombre} name="nombre" onChange={handleChange} placeholder="" required ></input>

                                <label className="inputFormLabel">Metros Cuadrados</label>
                                <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.metrosCuadrados} name="metrosCuadrados" onChange={handleChange} placeholder="" required ></input>

                                <label className="inputFormLabel">Precio Metro Cuadrado</label>
                                <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.precioMetroCuadrado} name="precioMetroCuadrado" onChange={handleChange} placeholder="" required ></input>

                                <label className="inputFormLabel">Desarrollo</label>
                                <select disabled={showModalSee} className="inputForm" value={datosF?.desarrollo?._id} onChange={handleChange} name="desarrollo" >
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {desarrollosData?.map(item =>
                                        <option key={item._id} value={item._id} > {item.nombre}</option>
                                    )}
                                </select>

                                <label className="inputFormLabel">Etapa</label>
                                <select disabled={showModalSee} className="inputForm" value={datosF?.etapaDesarrollo?._id} onChange={handleChange} name="etapaDesarrollo" >
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {etapaDesarrolloData?.map(item =>
                                        <option key={item._id} value={item._id} > {item.nombre}</option>
                                    )}
                                </select>

                                <label className="inputFormLabel">Estado</label>
                                <select disabled={showModalSee} className="inputForm" value={datosF?.estadoLote?._id} onChange={handleChange} name="estadoLote" >
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {estadoLoteData?.map(item =>
                                        <option key={item._id} value={item._id} > {item.nombre}</option>
                                    )}
                                </select>
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


export default Lotes;