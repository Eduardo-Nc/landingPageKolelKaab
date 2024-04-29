import React, { Fragment, useEffect, useState } from 'react';
import './Propiedades.css';
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
import { findPropiedades, findTipoOferta, findTipoInmueble, findTipoPago, createPropiedad, updatePropiedad, deletePropiedad } from '../../Redux/actions/propiedadesAction';

// Utikls
import { saveFileAws, saveFileArrayAws } from '../../../src/utils/uploadAws';

//Images
import Search from '../../img/search.png';



const Propiedades = () => {

    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)
    const { propiedadesData, tipoOfertaData, tipoInmuebleData, tipoPagoData } = useSelector(state => state.propiedades);




    // Search
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }


    const [title, setTitle] = useState("Propiedad");
    const [data, setData] = useState([]);
    const [datosF, setDataF] = useState({
        caratula_propiedad: "",
        caratula_propiedadData: "",
        galeria: [],
        galeriaData: [],
        folleto: "",
        folletoData: "",
        nombre: "",
        precio: "",
        comision: "",
        ciudadEstadoPais: "",
        tipoOferta: "",
        tipoInmueble: "",
        tipoPago: "",
        construccion: "",
        terreno: "",
        cantidadRecamaras: "",
        cantidadBanos: "",
        cantidadGaraje: "",
        colonia: "",
        referencias: "",
        descripcion: "",
        mapa: "",
        status: true
    });

    const [columns, setColumns] = useState([{
        dataField: '_id',
        text: 'ID',
        hidden: true
    }, {
        dataField: 'identificadorPropiedad',
        text: 'Identificador', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        }
    }, {
        dataField: 'caratula_propiedad',
        text: 'Caratula', sort: false,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <div style={{ width: '100px', borderRadius: '5px', overflow: 'hidden' }}>
                    <img src={row.caratula_propiedad} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
                </div>
            );
        }
    }, {
        dataField: 'nombre',
        text: 'Nombre', sort: true,
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
        dataField: 'precio',
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
                <label>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(row.precio ? row.precio : 0)}</label>
            );
        }
    },
    {
        dataField: 'tipoOferta.nombre',
        text: 'Tipo oferta', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        }
    },
    {
        dataField: 'tipoInmueble.nombre',
        text: 'Tipo inmueble', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        }
    },
    {
        dataField: 'tipoPago.nombre',
        text: 'Tipo pago', sort: true,
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
            text: `¿Realmente deseas borrar la ${title} : ${row.identificadorPropiedad}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletePropiedad(row._id))
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
        } else if (datosF.precio === "") {
            Swal.fire({
                title: "Precio es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.tipoOferta === "") {
            Swal.fire({
                title: "Tipo oferta es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.tipoInmueble === "") {
            Swal.fire({
                title: "Tipo inmueble es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.tipoPago === "") {
            Swal.fire({
                title: "Tipo pago es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else {

            dispatch(createPropiedad(datosF))
        }
    }



    const updateData = () => {

        dispatch(updatePropiedad(datosF))

    }

    const handleChange = (e) => {
        setDataF({
            ...datosF,
            [e.target.name]: e.target.value
        })
    }

    const selectedFile = async (e) => {

        if (e.target.files.length !== 0) {

            if (e.target.name === "caratula_propiedad") {
                setDataF({
                    ...datosF,
                    caratula_propiedadData: e.target.files[0],
                })

                let url = await saveFileAws(e.target.files[0])
                console.log(url)

                setDataF({
                    ...datosF,
                    caratula_propiedadData: e.target.files[0],
                    [e.target.name]: url
                })


            } else if (e.target.name === "galeria") {
                setDataF({
                    ...datosF,
                    galeriaData: e.target.files[0],
                })

                let url = await saveFileAws(e.target.files[0])
                console.log(url)

                setDataF({
                    ...datosF,
                    galeriaData: e.target.files[0],
                    [e.target.name]: url
                })

            } else if (e.target.name === "folleto") {
                setDataF({
                    ...datosF,
                    folletoData: e.target.files[0],
                })

                let url = await saveFileAws(e.target.files[0])
                console.log(url)

                setDataF({
                    ...datosF,
                    folletoData: e.target.files[0],
                    [e.target.name]: url
                })
            }
        }
    }


    const selectedHandler = async (e) => {


        if (e.target.files.length !== 0) {

            let galeriaData = datosF?.galeriaData?.length > 0 ? datosF?.galeriaData : [];

            for (let i = 0; i < e.target.files.length; i++) {
                galeriaData.push(e.target.files[i]);

            }

            setDataF({
                ...datosF,
                galeriaData: galeriaData,

            })
        }

    }


    useEffect(() => {
        dispatch(findPropiedades(false))
        return () => {
            dispatch(findPropiedades(true))
        }
    }, [])

    useEffect(() => {
        dispatch(findTipoOferta(false))
        dispatch(findTipoInmueble(false))
        dispatch(findTipoPago(false))
        return () => {
            dispatch(findTipoOferta(true))
            dispatch(findTipoInmueble(true))
            dispatch(findTipoPago(true))
        }
    }, [])

    useEffect(() => {
        if (search !== "") {
            if (propiedadesData.length > 0) {
                let result = propiedadesData.filter(item => item.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.identificadorPropiedad.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.tipoOferta.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.tipoInmueble.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.tipoPago.nombre.toString().toLowerCase().includes(search.toLocaleLowerCase()))
                setData(result)
            }
        } else {
            propiedadesData.length > 0 ? setData(propiedadesData) : setData([])
        }

    }, [search])

    useEffect(() => {
        if (!loadingFind && data.length === 0) {

        } else {
            if (search === "") {
                propiedadesData.length > 0 ? setData(propiedadesData) : setData([])
            }
        }
    }, [data, propiedadesData])

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
                            <h1>Propiedades</h1>
                            <p>{propiedadesData.length} {propiedadesData.length > 1 ? "Propiedades" : "Propiedad"}</p>
                        </div>

                        <div className="contenedor-input-search-all">
                            <div className="cont-all-principal-search">
                                <div className="cont-all-input-search">
                                    <div className="cont-ico-input-search">
                                        <img src={Search} alt="lupa" />
                                    </div>
                                    <input onChange={handleSearchChange} value={search} type="text" placeholder="Buscar propiedad" />
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
                        <label className="inputFormLabel">Caratula / Folleto</label>

                        <div className="cont-caratula-folleto">
                            <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                {
                                    datosF.caratula_propiedadData ? <img src={URL.createObjectURL(datosF.caratula_propiedadData)} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
                                        :
                                        <Fragment >
                                            <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                <i className="far fa-file-image" >
                                                </i>
                                                <span className="title">
                                                    Caratula
                                                </span>
                                            </div>

                                        </Fragment>
                                }
                                <input className="FileUpload1" onChange={selectedFile} name="caratula_propiedad" type="file" accept="image/jpeg, image/png" />
                            </label>
                            <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                {
                                    datosF.folletoData ? <img src={Pdf} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Folleto" />
                                        :
                                        <Fragment >
                                            <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                <i className="far fa-file-pdf" >
                                                </i>
                                                <span className="title">
                                                    Folleto
                                                </span>
                                            </div>

                                        </Fragment>
                                }
                                <input className="FileUpload1" onChange={selectedFile} name="folleto" type="file" accept="application/pdf" />
                            </label>
                        </div>

                        <label className="inputFormLabel" style={{ marginTop: '20px' }}>Galeria</label>
                        <div style={{ padding: '1px', marginBottom: '10px' }}>
                            <strong>Nota:</strong> Debe elegir 6 archivos (como máximo recomendado)
                        </div>
                        <input onChange={selectedHandler} name="galeria" multiple type="file" accept="image/*" />
                        {
                            datosF?.galeriaData && datosF?.galeriaData?.length > 0 &&
                            <div className="alert alert-secondary docs-archivos-prop" role="alert">
                                {datosF.galeriaData.map((item, index) =>
                                    <div key={index}>
                                        <img src={URL.createObjectURL(item)} />
                                    </div>
                                )}
                            </div>
                        }

                        <label className="inputFormLabel">Nombre propiedad</label>
                        <input type="text" className="inputForm" autoComplete="off" value={datosF?.nombre} name="nombre" onChange={handleChange} placeholder="" required ></input>

                        <div className="cont-double-input-form">
                            <div>
                                <label className="inputFormLabel">Precio</label>
                                <input type="text" className="inputForm" autoComplete="off" value={datosF?.precio} name="precio" onChange={handleChange} placeholder="" required ></input>
                            </div>
                            <div>
                                <label className="inputFormLabel">Ciudad, Estado, País</label>
                                <input type="text" className="inputForm" autoComplete="off" value={datosF?.ciudadEstadoPais} name="ciudadEstadoPais" onChange={handleChange} placeholder="" required ></input>
                            </div>
                        </div>
                        <div className="cont-double-input-form">
                            <div>
                                <label className="inputFormLabel">Tipo de oferta</label>
                                {/* <input type="text" className="inputForm" autoComplete="off" value={datosF?.tipoOferta} name="tipoOferta" onChange={handleChange} placeholder="" required ></input> */}
                                <select className="inputForm" value={datosF?.tipoOferta} onChange={handleChange} name="tipoOferta" >
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tipoOfertaData?.map(item =>
                                        < option key={item._id} value={item._id} > {item.nombre}</option>
                                    )}
                                </select>
                            </div>
                            <div>
                                <label className="inputFormLabel">Tipo de inmueble</label>
                                {/* <input type="text" className="inputForm" autoComplete="off" value={datosF?.tipoInmueble} name="tipoInmueble" onChange={handleChange} placeholder="" required ></input> */}
                                <select className="inputForm" value={datosF?.tipoInmueble} onChange={handleChange} name="tipoInmueble" >
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tipoInmuebleData?.map(item =>
                                        < option key={item._id} value={item._id} > {item.nombre}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="cont-double-input-form">
                            <div>
                                <label className="inputFormLabel">Opciones de pago</label>
                                {/* <input type="text" className="inputForm" autoComplete="off" value={datosF?.tipoPago} name="tipoPago" onChange={handleChange} placeholder="" required ></input> */}
                                <select className="inputForm" value={datosF?.tipoPago} onChange={handleChange} name="tipoPago" >
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tipoPagoData?.map(item =>
                                        < option key={item._id} value={item._id} > {item.nombre}</option>
                                    )}
                                </select>
                            </div>
                            <div>
                                <label className="inputFormLabel">Tamaño propiedad</label>
                                <input type="text" className="inputForm" autoComplete="off" value={datosF?.construccion} name="construccion" onChange={handleChange} placeholder="" required ></input>
                            </div>
                        </div>
                        <div className="cont-double-input-form">
                            <div>
                                <label className="inputFormLabel">Tamaño terreno</label>
                                <input type="text" className="inputForm" autoComplete="off" value={datosF?.terreno} name="terreno" onChange={handleChange} placeholder="" required ></input>
                            </div>
                            <div>
                                <label className="inputFormLabel">Cantidad recámara(s)</label>
                                <input type="text" className="inputForm" autoComplete="off" value={datosF?.cantidadRecamaras} name="cantidadRecamaras" onChange={handleChange} placeholder="" required ></input>
                            </div>
                        </div>
                        <div className="cont-double-input-form">
                            <div>
                                <label className="inputFormLabel">Cantidad baño(s)</label>
                                <input type="text" className="inputForm" autoComplete="off" value={datosF?.cantidadBanos} name="cantidadBanos" onChange={handleChange} placeholder="" required ></input>
                            </div>
                            <div>
                                <label className="inputFormLabel">Cantidad garaje</label>
                                <input type="text" className="inputForm" autoComplete="off" value={datosF?.cantidadGaraje} name="cantidadGaraje" onChange={handleChange} placeholder="" required ></input>
                            </div>
                        </div>


                        <label className="inputFormLabel">Comisión</label>
                        <input type="text" className="inputForm" autoComplete="off" name="comision" value={datosF?.comision} onChange={handleChange} placeholder="" required ></input>

                        <label className="inputFormLabel">Colonia</label>
                        <input type="text" className="inputForm" autoComplete="off" name="colonia" value={datosF?.colonia} onChange={handleChange} placeholder="" required ></input>

                        <label className="inputFormLabel">Referencias</label>
                        <textarea type="text" className="inputForm-textarea" autoComplete="off" value={datosF?.referencias} name="referencias" onChange={handleChange} placeholder="" required ></textarea >

                        <label className="inputFormLabel">Descripcion de propiedad</label>
                        <textarea type="text" className="inputForm-textarea" autoComplete="off" value={datosF?.descripcion} name="descripcion" onChange={handleChange} placeholder="" required ></textarea >

                        <label className="inputFormLabel">Mapa propiedad</label>
                        <textarea type="text" className="inputForm-textarea" autoComplete="off" value={datosF?.mapa} name="mapa" onChange={handleChange} placeholder="" required ></textarea >
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

                                <label className="inputFormLabel">Caratula / Folleto</label>

                                <div className="cont-caratula-folleto">
                                    <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                        {
                                            datosF.caratula_propiedad ? <img src={datosF.caratula_propiedad} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
                                                :
                                                <Fragment >
                                                    <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                        <i className="far fa-file-image" >
                                                        </i>
                                                        <span className="title">
                                                            Caratula
                                                        </span>
                                                    </div>

                                                </Fragment>
                                        }
                                        <input className="FileUpload1" onChange={selectedFile} name="caratula_propiedad" type="file" accept="image/jpeg, image/png" />
                                    </label>
                                    <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                        {
                                            datosF.folleto !== "" ? <img src={Pdf} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Folleto" />
                                                :
                                                <Fragment >
                                                    <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                        <i className="far fa-file-pdf" >
                                                        </i>
                                                        <span className="title">
                                                            Folleto
                                                        </span>
                                                    </div>

                                                </Fragment>
                                        }
                                        <input className="FileUpload1" onChange={selectedFile} name="folleto" type="file" accept="application/pdf" />
                                    </label>
                                </div>

                                <label className="inputFormLabel" style={{ marginTop: '20px' }}>Galeria</label>
                                <div style={{ padding: '1px', marginBottom: '10px' }}>
                                    <strong>Nota:</strong> Debe elegir 6 archivos (como máximo recomendado)
                                </div>
                                <input onChange={selectedHandler} name="galeria" multiple type="file" accept="image/*" />
                                {
                                    datosF?.galeria && datosF?.galeria?.length > 0 &&
                                    <div className="alert alert-secondary docs-archivos-prop" role="alert">
                                        {datosF.galeria.map((item, index) =>
                                            <div key={index}>
                                                <img src={item} />
                                            </div>
                                        )}
                                    </div>
                                }

                                <label className="inputFormLabel">Nombre propiedad</label>
                                <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.nombre} name="nombre" onChange={handleChange} placeholder="" required ></input>

                                <div className="cont-double-input-form">
                                    <div>
                                        <label className="inputFormLabel">Precio</label>
                                        <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.precio} name="precio" onChange={handleChange} placeholder="" required ></input>
                                    </div>
                                    <div>
                                        <label className="inputFormLabel">Ciudad, Estado, País</label>
                                        <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.ciudadEstadoPais} name="ciudadEstadoPais" onChange={handleChange} placeholder="" required ></input>
                                    </div>
                                </div>
                                <div className="cont-double-input-form">
                                    <div>
                                        <label className="inputFormLabel">Tipo de oferta</label>
                                        {/* <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.tipoOferta} name="tipoOferta" onChange={handleChange} placeholder="" required ></input> */}
                                        <select disabled={showModalSee} className="inputForm" value={datosF?.tipoOferta?._id} onChange={handleChange} name="tipoOferta" >
                                            <option value="" defaultValue>Seleccione una opción</option>
                                            {tipoOfertaData?.map(item =>
                                                < option key={item._id} value={item._id} > {item.nombre}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="inputFormLabel">Tipo de inmueble</label>
                                        {/* <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.tipoInmueble} name="tipoInmueble" onChange={handleChange} placeholder="" required ></input> */}
                                        <select disabled={showModalSee} className="inputForm" value={datosF?.tipoInmueble?._id} onChange={handleChange} name="tipoInmueble" >
                                            <option value="" defaultValue>Seleccione una opción</option>
                                            {tipoInmuebleData?.map(item =>
                                                < option key={item._id} value={item._id} > {item.nombre}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="cont-double-input-form">
                                    <div>
                                        <label className="inputFormLabel">Opciones de pago</label>
                                        {/* <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.tipoPago} name="tipoPago" onChange={handleChange} placeholder="" required ></input> */}
                                        <select disabled={showModalSee} className="inputForm" value={datosF?.tipoPago?._id} onChange={handleChange} name="tipoPago" >
                                            <option value="" defaultValue>Seleccione una opción</option>
                                            {tipoPagoData?.map(item =>
                                                < option key={item._id} value={item._id} > {item.nombre}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="inputFormLabel">Tamaño propiedad</label>
                                        <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.construccion} name="construccion" onChange={handleChange} placeholder="" required ></input>
                                    </div>
                                </div>
                                <div className="cont-double-input-form">
                                    <div>
                                        <label className="inputFormLabel">Tamaño terreno</label>
                                        <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.terreno} name="terreno" onChange={handleChange} placeholder="" required ></input>
                                    </div>
                                    <div>
                                        <label className="inputFormLabel">Cantidad recámara(s)</label>
                                        <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.cantidadRecamaras} name="cantidadRecamaras" onChange={handleChange} placeholder="" required ></input>
                                    </div>
                                </div>
                                <div className="cont-double-input-form">
                                    <div>
                                        <label className="inputFormLabel">Cantidad baño(s)</label>
                                        <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.cantidadBanos} name="cantidadBanos" onChange={handleChange} placeholder="" required ></input>
                                    </div>
                                    <div>
                                        <label className="inputFormLabel">Cantidad garaje</label>
                                        <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.cantidadGaraje} name="cantidadGaraje" onChange={handleChange} placeholder="" required ></input>
                                    </div>
                                </div>

                                <label className="inputFormLabel">Comisión</label>
                                <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" name="comision" value={datosF?.comision} onChange={handleChange} placeholder="" required ></input>

                                <label className="inputFormLabel">Colonia</label>
                                <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" name="colonia" value={datosF?.colonia} onChange={handleChange} placeholder="" required ></input>

                                <label className="inputFormLabel">Referencias</label>
                                <textarea disabled={showModalSee} type="text" className="inputForm-textarea" autoComplete="off" value={datosF?.referencias} name="referencias" onChange={handleChange} placeholder="" required ></textarea >

                                <label className="inputFormLabel">Descripcion de propiedad</label>
                                <textarea disabled={showModalSee} type="text" className="inputForm-textarea" autoComplete="off" value={datosF?.descripcion} name="descripcion" onChange={handleChange} placeholder="" required ></textarea >

                                <label className="inputFormLabel">Mapa propiedad</label>
                                <textarea disabled={showModalSee} type="text" className="inputForm-textarea" autoComplete="off" value={datosF?.mapa} name="mapa" onChange={handleChange} placeholder="" required ></textarea >


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


export default Propiedades;