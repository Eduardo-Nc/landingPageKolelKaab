import React, { Fragment, useEffect, useState } from 'react';
import './CotizadorInteractivo.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import Plano from "./Plano";
import ReactTooltip from 'react-tooltip';
import Whatsapp from '../../img/whatsapp.png';
import axios from 'axios';
import { saveAs } from 'file-saver';



// components
import Header from '../../Components/header/Header';
import Sidebar from '../../Components/sidebar/Sidebar';
import Notifications from '../../Components/notifications/Notifications';



//Bootstrap
import { Button, Modal, Form, InputGroup, FormControl } from 'react-bootstrap';




//Redux
import { useDispatch, useSelector } from 'react-redux';
import { abrirModalIn, abrirModalEd, abrirModalSe } from '../../Redux/actions/uiAction';
import { findLotesById } from '../../Redux/actions/lotesAction';




//Images
import Search from '../../img/search.png';


const CotizadorInteractivo = () => {

    const params = useParams();
    const baseUrl = process.env.REACT_APP_API_URL;

    // console.log(params?.id !== undefined ? params.id : "")

    const dispatch = useDispatch();

    const { name, surnames, rol, idRol, uid, email, dataUserDB } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind, planesData } = useSelector(state => state.menu)
    const { loteByIdData } = useSelector(state => state.lotes);

    // rol
    // 63ddabebcce4e43d749383a7 adminitrador
    // 63ddabf3cce4e43d749383a9 colaborador
    // 63ddac35cce4e43d749383ab Super adminitrador
    // 63f8fad604703944801fa295 Colaborador Pro
    // 63e00b1e8bab4d4f7c675559 Todos
    // console.log(idRol)


    // (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab" || idRol == "63f8fad604703944801fa295") ?

    const [data, setData] = useState([])
    const [planSelect, setPlanSelect] = useState({});
    const [datosLote, setDatosLote] = useState({})
    const [desarrollo, setDesarrollo] = useState({
        nombre: "",
        caratula: ""
    });
    const [abrirModal, setAbrirModal] = useState(false);
    const [enganche, setEnganche] = useState(15);
    const [TotalEnganche, setTotalEnganche] = useState(0);


    const [verDatosNuevoCotizado, setVerDatosNuevoCotizado] = useState(false)
    const [datosNuevoCotizado, setDatosNuevoCotizado] = useState({
        nombre: "",
        correo: "",
        numero: "",
    });


    const [abrirModalNoDisponible, setAbrirModalNoDisponible] = useState(false);
    const [datosTooltip, setDatosTooltip] = useState(undefined);

    const [enviado, setEnviado] = useState(false);

    const abrirCotizador = (num_lote) => {

        let resultado = loteByIdData.find(item => item.nombre == num_lote)

        // console.log(resultado)

        if (idRol === "63f8fad604703944801fa295") {
            setDatosLote({
                ...resultado,
                precioMetroCuadrado: 849,
                precioTotal: parseFloat(resultado.metrosCuadrados) * 849
            })
        } else {
            setDatosLote(resultado)
        }

        if (resultado !== undefined) {
            resultado.estadoLote.nombre === "Disponible" ? setAbrirModal(!abrirModal) : setAbrirModalNoDisponible(!abrirModalNoDisponible)
        }

    };

    const numeroLotePropiedad = (lote) => {
        let resultado = loteByIdData.find(item => item.nombre == lote);
        // console.log("resultado 65:", resultado)
        setDatosTooltip(resultado)
    }

    const enviarDatos = async () => {
        setEnviado(true)

        axios.post(baseUrl + "/desarrollo/create/pdf/cotizacion", {
            preciototaldescuento: planSelect.totalLiquidar,
            plazo_seleccionado: planSelect.mesesSelect,
            nombre_desarrollo: datosLote.desarrollo.nombre,
            fecha: moment().format(`LL`),

            nombre_colaborador: verDatosNuevoCotizado == true ? datosNuevoCotizado?.nombre : (name + " " + surnames),
            correo_colaborador: verDatosNuevoCotizado == true ? datosNuevoCotizado?.correo : email,
            numero_colaborador: verDatosNuevoCotizado == true ? datosNuevoCotizado?.numero : dataUserDB.perfil.numeroCelular,

            nombre_lote: datosLote?.nombre,
            tipo_plan: planSelect.meses == 1 ? "PAGO DE CONTADO" : planSelect.meses == 2 ? `PAGO DE CONTADO - ${planSelect.descuento > 0 && planSelect.descuento}% DESCUENTO` : `${planSelect.mesesSelect} MESES SIN INTERESES`,
            preciototal: Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote?.precioTotal ? datosLote?.precioTotal : 0),
            metros_cuadrados: datosLote.metrosCuadrados ? datosLote.metrosCuadrados : 0,
            precio_metros_cuadra: Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precioMetroCuadrado ? datosLote.precioMetroCuadrado : 0),
            total_enganche: Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.TotalEnganche ? planSelect.TotalEnganche : 0),
            total_enganche_apartado: Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.TotalEnganche ? planSelect.TotalEnganche : 0),
            total_financiar: Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.totalLiquidar ? planSelect.totalLiquidar : 0),
        })
            .then((response) => {
                setEnviado(false)
                saveAs(baseUrl.substring(0, baseUrl.length - 4) + "/" + response.data.message, "Cotizacion.pdf");
            })
            .catch((error) => {
                setEnviado(false)
                console.log(error)
            })
    }


    const cotizarAlert = (id) => {
        Swal.fire({
            title: `¿Deseas apartar el lote #${id}? `,
            text: `ksksksks`,
            html:
                `
                <a style="color:#4C4C4C; " href="https://wa.me/529991295931/?text=Quiero solicitar más información para poder apartar el lote: ${id} " target="_blank">
                <div style="width: 100%; display:flex; justify-content:center; align-items:center; margin-bottom:5px; ">
                <div style="width: 47px; height: 47px;  border-radius: 50%; display:flex; justify-content:center; align-items:center; "}}>
                <img style="width: 100%; height: 100%; object-fit: cover;"  src=${Whatsapp} alt="Logo WhatsApp"></img> <br></br> 
                </div>
                </div>
                </a>
                `+
                `<a style="color:#4C4C4C; " href="https://wa.me/529991295931/?text=Quiero solicitar más información para poder apartar el lote: ${id} " target="_blank">Contactar a un asesor</a>`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `DESCARGAR COTIZACIÓN`,
            denyButtonText: `CANCELAR`,
        }).then((result) => {

            if (result.isConfirmed) {
                // enviarDatosApartar()
                enviarDatos()

            } else if (result.isDenied) {

            }
        })
    }


    // console.log("planSelect: ", planSelect)
    // console.log("datosLote: ", datosLote)
    // console.log(planSelect.meses == 1 ? "PAGO DE CONTADO" : planSelect.meses == 2 ? `PAGO DE CONTADO - ${planSelect.descuento > 0 && planSelect.descuento}% DESCUENTO` : `${planSelect.mesesSelect} MESES SIN INTERESES`)
    // console.log(baseUrl)
    // console.log(name + " " + surnames)

    // Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote?.precioMetroCuadrado ? datosLote?.precioMetroCuadrado : 0)





    useEffect(() => {
        dispatch(findLotesById(false, params?.id !== undefined ? params.id : ""))
        return () => {
            dispatch(findLotesById(true, params?.id !== undefined ? params.id : ""))
        }
    }, [params])

    useEffect(() => {
        if (loteByIdData.length > 0) {
            setDesarrollo({
                nombre: loteByIdData[0]?.desarrollo?.nombre,
                caratula: loteByIdData[0]?.desarrollo?.caratula
            })
            setData(loteByIdData)
        }
    }, [loteByIdData])

    // useEffect(() => {
    //     if (idRol === "63f8fad604703944801fa295") {

    //     }
    // }, [idRol])

    // console.log(loteByIdData)
    // console.log(datosTooltip)

    // console.log("enganche: ", enganche)

    // useEffect(() => {
    //     if (planSelect?.mesesSelect === 1) {
    //         setEnganche(0)
    //     } else {
    //         setEnganche(15)
    //     }
    // }, [planSelect])


    return (

        <div className="cont-all-principal-dashboard">
            <Header />
            <Sidebar />
            <Notifications />

            {!loadingFind &&
                <div className="cont-vertical-status-icons">
                    <div>
                        <label style={{ padding: '0px', borderRadius: '9px', background: '#70954a', border: 'none', width: '40px', height: '40px' }} />
                        <label style={{ fontSize: '14px', fontWeight: '400' }}>Disponibles</label>
                    </div>
                    <div>
                        <label style={{ padding: '0px', borderRadius: '9px', background: '#ffff00', border: 'none', width: '40px', height: '40px' }} />
                        <label style={{ fontSize: '14px', fontWeight: '400' }}>Apartados</label>
                    </div>
                    <div>
                        <label style={{ padding: '0px', borderRadius: '9px', background: '#ff0000', border: 'none', width: '40px', height: '40px' }} />
                        <label style={{ fontSize: '14px', fontWeight: '400' }}>Vendidos</label>
                    </div>
                    <div>
                        <label style={{ padding: '0px', borderRadius: '9px', background: '#138f34', border: 'none', width: '40px', height: '40px' }} />
                        <label style={{ fontSize: '14px', fontWeight: '400' }}>A. Verdes</label>
                    </div>
                    <div>
                        <label style={{ padding: '0px', borderRadius: '9px', background: '#6462ac', border: 'none', width: '40px', height: '40px' }} />
                        <label style={{ fontSize: '14px', fontWeight: '400' }}>Casa Club</label>
                    </div>
                </div>
            }


            {!loadingFind &&
                <div className="cont-all-user-scroll animate__animated animate__fadeInUp animate__faster 2s">


                    <div className="cont-header-dash-users">
                        <div className="cont-header-desarrollo-mapa">
                            <h1>{desarrollo?.nombre ? desarrollo?.nombre : ""}</h1>
                        </div>


                        <div className="cont-prin-cotizador-map">

                            {!loadingFind && loteByIdData.length === 0 &&
                                <h3>Sin resultados</h3>
                            }

                            <Plano data={loteByIdData} numeroLotePropiedad={numeroLotePropiedad} abrirCotizador={abrirCotizador} />

                            <ReactTooltip type="dark" place="top" data-multiline="true" id="tooltipbotom" >
                                {datosTooltip !== undefined &&
                                    <Fragment>
                                        <h2 style={datosTooltip.estadoLote.nombre === "Vendido" ? { color: "#ff0000" } : datosTooltip.estadoLote.nombre === "Reservado" ? { color: "#ffff00" } : datosTooltip.estadoLote.nombre === "Disponible" ? { color: "#70954a" } : {}}>{datosTooltip.estadoLote.nombre}</h2>

                                        <p><strong>Lote: </strong>{datosTooltip.nombre} - {datosTooltip.metrosCuadrados}m<sup>2</sup></p>

                                        <p><strong>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosTooltip?.precioTotal ? datosTooltip.precioTotal : 0)} MXN</strong></p>
                                    </Fragment>
                                }
                            </ReactTooltip>

                        </div>

                    </div>




                </div>
            }



            {
                loadingFind &&

                <div className="cont-spiner-cotizador">
                    <div>
                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>



            }



            <Modal size="lg" className="modal-cotizador" show={abrirModalNoDisponible} onHide={() => { setAbrirModalNoDisponible(!abrirModalNoDisponible) }}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" >


                        <div style={{ width: '100%' }} className="modal-titulo-cotizador">
                            <div className="alert alert-danger" role="alert">
                                <h4>LOTE NO DISPONIBLE</h4>
                            </div>
                        </div>



                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setPlanSelect({})
                        setAbrirModalNoDisponible(!abrirModalNoDisponible)
                    }} >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal size="xl" className="modal-cotizador1" show={abrirModal} onHide={() => {
                setEnganche(15);
                setDatosLote({})
                setPlanSelect({})
                setAbrirModal(!abrirModal)
            }}>
                <Modal.Header closeButton>

                    <div className="titulo-modal-cotizador">
                        <h3>Cotizador</h3>
                    </div>

                </Modal.Header>

                {/* datosLote?.nombre */}



                <Modal.Body>
                    <form className="form-modal-cotizador-main" >
                        <div className="cont-1-datos-cotizador-info">
                            <label>Desarrollo</label>
                            <h4>{datosLote?.desarrollo?.nombre}</h4>

                            <label>Lote</label>
                            <h4>{datosLote?.nombre}</h4>

                            <label>Área</label>
                            <h4>{datosLote?.metrosCuadrados} m<sup>2</sup></h4>

                            <label>Precio por m<sup>2</sup></label>
                            <h4>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote?.precioMetroCuadrado ? datosLote?.precioMetroCuadrado : 0)} MXN</h4>

                            <label>Precio de Lista</label>
                            <h4>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote?.precioTotal ? datosLote?.precioTotal : 0)} MXN</h4>
                        </div>
                        <div className="cont-1-datos-cotizador-operaciones">
                            <Form.Control as="select" name="plan" onChange={(e) => {
                                const { name, value } = e.target;

                                if (value === "Seleccione un plan") {
                                    setTotalEnganche(0)
                                    setEnganche(0)
                                    setPlanSelect({})
                                } else {
                                    setTotalEnganche((((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (parseFloat(value) == 2 ? 15 : 0)) / 100) * enganche))

                                    setPlanSelect({
                                        mesesSelect: value == 1 ? 1 : value == 2 ? 1 : value == 3 ? 48 : value == 4 ? 36 : value == 5 ? 24 : value == 6 ? 12 : value == 7 && 6,
                                        meses: value,
                                        TotalEnganche: (value == 1 || value == 2) ? 0 : (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (parseFloat(value) == 2 ? 15 : 0)) / 100) * enganche),
                                        descuento: (value == 2) ? 15 : 0,
                                        totalDescuento: (parseFloat(datosLote.precioTotal) / 100) * (value == 2 ? 15 : 0),
                                        totalLiquidar: (value == 1 || value == 2) ? (parseFloat(datosLote.precioTotal) - (parseFloat(datosLote.precioTotal) / 100) * (value == 2 ? 15 : 0)) : ((datosLote.precioTotal - (parseFloat(datosLote.precioTotal) / 100) * (value == 2 ? 15 : 0)) - (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (parseFloat(value) == 2 ? 15 : 0)) / 100) * enganche)),
                                        pagosMensuales: (value == 1 || value == 2) ? (parseFloat(datosLote.precioTotal) - (parseFloat(datosLote.precioTotal) / 100) * (value == 2 ? 15 : 0)) : (((datosLote.precioTotal - (parseFloat(datosLote.precioTotal) / 100) * (value == 2 ? 15 : 0)) - (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (parseFloat(value) == 2 ? 15 : 0)) / 100) * enganche)) / (value == 1 ? 1 : value == 2 ? 1 : value == 3 ? 48 : value == 4 ? 36 : value == 5 ? 24 : value == 6 ? 12 : value == 7 && 6))
                                    })
                                }


                            }} >
                                <option defaultValue>Seleccione un plan</option>
                                {planesData.map(item =>
                                    <option key={item._id} value={item._id}>{item.meses === 0 ? "PAGO DE CONTADO" : `${item.meses} MESES SIN INTERESES`} {item.descuento > 0 && " - "} {item.descuento > 0 && item.descuento + "% DESCUENTO"}</option>
                                )}
                            </Form.Control>


                            {/* <div className="contenedor-opciones-pago">
                                <label>Código Promocional:</label>
                                <div style={{ border: "1px solid white" }} className="cont-principal-input-1">

                                </div>
                                <i className="fas fa-equals contenedor-opciones-pago-equals"></i>
                                <div className="cont-principal-input">
                                    <div className="cont-principal-input-icons">
                                        <i style={{ fontSize: '16px' }} className="fas fa-hashtag"></i>
                                    </div>
                                    <div className="cont-principal-input-input">
                                        <input disabled onChange={() => { }} value={
                                            Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.pagosMensuales ? planSelect.pagosMensuales : 0)
                                        } type="text" placeholder="" />
                                    </div>
                                </div>
                            </div> */}

                            {
                                idRol !== "63f8fad604703944801fa295" &&
                                <div style={{ marginTop: '10px' }} className="contenedor-opciones-pago">
                                    <label>Descuento:</label>
                                    <div className="cont-principal-input-1">
                                        <div className="cont-principal-input-icons">
                                            <i className="fas fa-percent"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled={uid === "63ddabf3cce4e43d749383a9" ? true : false} onChange={(e) => {
                                                const { name, value } = e.target;

                                                setTotalEnganche((((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (parseFloat(value))) / 100) * enganche))

                                                setPlanSelect({
                                                    ...planSelect,
                                                    TotalEnganche: (planSelect.meses == 1 || planSelect.meses == 2) ? 0 : (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (parseFloat(value))) / 100) * enganche),
                                                    descuento: parseFloat(value),
                                                    totalDescuento: (parseFloat(datosLote.precioTotal) / 100) * (parseFloat(value)),
                                                    totalLiquidar: (planSelect.meses == 1 || planSelect.meses == 2) ? (parseFloat(datosLote.precioTotal) - (parseFloat(datosLote.precioTotal) / 100) * (parseFloat(value))) : ((datosLote.precioTotal - (parseFloat(datosLote.precioTotal) / 100) * (parseFloat(value))) - (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (parseFloat(value))) / 100) * enganche)),
                                                    pagosMensuales: (planSelect.meses == 1 || planSelect.meses == 2) ? (parseFloat(datosLote.precioTotal) - (parseFloat(datosLote.precioTotal) / 100) * (parseFloat(value))) : (((datosLote.precioTotal - (parseFloat(datosLote.precioTotal) / 100) * (parseFloat(value))) - (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (parseFloat(value))) / 100) * enganche)) / (planSelect.meses == 1 ? 1 : planSelect.meses == 2 ? 1 : planSelect.meses == 3 ? 48 : planSelect.meses == 4 ? 36 : planSelect.meses == 5 ? 24 : planSelect.meses == 6 ? 12 : planSelect.meses == 7 && 6))
                                                })

                                            }} value={planSelect?.descuento ? planSelect?.descuento : 0} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <i className="fas fa-equals contenedor-opciones-pago-equals"></i>
                                    <div className="cont-principal-input">
                                        <div className="cont-principal-input-icons">
                                            <i style={{ fontSize: '16px' }} className="fas fa-dollar-sign"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled onChange={() => { }} value={
                                                Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.totalDescuento ? planSelect.totalDescuento : 0)
                                                // planSelect.totalDescuento
                                            } type="text" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            }

                            {planSelect?.mesesSelect !== 1 &&
                                <div className="contenedor-opciones-pago">
                                    <label>Enganche:</label>
                                    <div className="cont-principal-input-1">
                                        <div className="cont-principal-input-icons">
                                            <i className="fas fa-percent"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled={uid === "63ddabf3cce4e43d749383a9" ? true : false} onChange={(e) => {
                                                const { name, value } = e.target;
                                                setEnganche(parseFloat(value));

                                                setPlanSelect({
                                                    ...planSelect,
                                                    TotalEnganche: (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (planSelect?.descuento ? planSelect?.descuento : 0)) / 100) * parseFloat(value)),
                                                    totalLiquidar: ((datosLote.precioTotal - (parseFloat(datosLote.precioTotal) / 100) * (planSelect?.descuento ? planSelect?.descuento : 0)) - (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (planSelect?.descuento ? planSelect?.descuento : 0)) / 100) * parseFloat(value))),
                                                    pagosMensuales: (((datosLote.precioTotal - (parseFloat(datosLote.precioTotal) / 100) * (planSelect?.descuento ? planSelect?.descuento : 0)) - (((parseFloat(datosLote.precioTotal) - ((parseFloat(datosLote.precioTotal) / 100)) * (planSelect?.descuento ? planSelect?.descuento : 0)) / 100) * parseFloat(value))) / (planSelect.meses == 1 ? 1 : planSelect.meses == 2 ? 1 : planSelect.meses == 3 ? 48 : planSelect.meses == 4 ? 36 : planSelect.meses == 5 ? 24 : planSelect.meses == 6 ? 12 : planSelect.meses == 7 && 6))
                                                })


                                            }} value={Object.keys(planSelect).length === 0 ? 0 : enganche} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <i className="fas fa-equals contenedor-opciones-pago-equals"></i>
                                    <div className="cont-principal-input">
                                        <div className="cont-principal-input-icons">
                                            <i style={{ fontSize: '16px' }} className="fas fa-dollar-sign"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled onChange={() => { }} value={
                                                Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.TotalEnganche ? planSelect.TotalEnganche : 0)
                                            } type="text" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            }

                            {planSelect?.mesesSelect !== 1 &&
                                <div className="contenedor-opciones-pago">
                                    <label>Total a Financiar:</label>
                                    <div className="cont-principal-input-1">
                                        <div className="cont-principal-input-icons">
                                            <i className="fas fa-percent"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled onChange={() => { }} value={Object.keys(planSelect).length === 0 ? 0 : 100 - enganche} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <i className="fas fa-equals contenedor-opciones-pago-equals"></i>
                                    <div className="cont-principal-input">
                                        <div className="cont-principal-input-icons">
                                            <i style={{ fontSize: '16px' }} className="fas fa-dollar-sign"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled onChange={() => { }} value={
                                                Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.totalLiquidar ? planSelect.totalLiquidar : 0)
                                            } type="text" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            }

                            {(planSelect?.mesesSelect !== 1 || planSelect?.mesesSelect > 1) &&
                                <div className="contenedor-opciones-pago">
                                    <label>Mensualidades:</label>
                                    <div className="cont-principal-input-1">
                                        <div className="cont-principal-input-icons">
                                            <i className="fas fa-hashtag"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled onChange={() => { }} value={planSelect?.mesesSelect ? planSelect?.mesesSelect : 0} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <i className="fas fa-equals contenedor-opciones-pago-equals"></i>
                                    <div className="cont-principal-input">
                                        <div className="cont-principal-input-icons">
                                            <i style={{ fontSize: '16px' }} className="fas fa-dollar-sign"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled onChange={() => { }} value={
                                                Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.pagosMensuales ? planSelect.pagosMensuales : 0)
                                            } type="text" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            }

                            {planSelect?.mesesSelect === 1 &&
                                <div className="contenedor-opciones-pago">
                                    <label>Total a liquidar:</label>
                                    <div style={{ border: "1px solid white" }} className="cont-principal-input-1">

                                    </div>
                                    <i className="fas fa-equals contenedor-opciones-pago-equals"></i>
                                    <div className="cont-principal-input">
                                        <div className="cont-principal-input-icons">
                                            <i style={{ fontSize: '16px' }} className="fas fa-dollar-sign"></i>
                                        </div>
                                        <div className="cont-principal-input-input">
                                            <input disabled onChange={() => { }} value={
                                                Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(planSelect.pagosMensuales ? planSelect.pagosMensuales : 0)
                                            } type="text" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            }

                            {Object.keys(planSelect).length > 0 ?
                                verDatosNuevoCotizado == false ?
                                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab" || idRol == "63f8fad604703944801fa295") ?
                                        <div onClick={() => {
                                            if (verDatosNuevoCotizado == true) {
                                                setDatosNuevoCotizado({
                                                    nombre: "",
                                                    correo: "",
                                                    numero: "",
                                                })
                                                setVerDatosNuevoCotizado(!verDatosNuevoCotizado)

                                            } else {
                                                setVerDatosNuevoCotizado(!verDatosNuevoCotizado)
                                            }
                                        }} className="btn-cambiar-colaborador-cotizacion">
                                            <label>{verDatosNuevoCotizado ? "Eliminar Colaborador" : "Asignar Colaborador"}</label>
                                        </div>
                                        :
                                        <></>
                                    :
                                    <></>
                                :
                                <></>
                            }

                            {Object.keys(planSelect).length > 0 ?
                                verDatosNuevoCotizado == true ?
                                    (idRol == "63ddabebcce4e43d749383a7" || idRol == "63ddac35cce4e43d749383ab" || idRol == "63f8fad604703944801fa295") ?
                                        <div className="cont-agregar-datos-nuevo-cotizado">
                                            <div onClick={() => {
                                                if (verDatosNuevoCotizado == true) {
                                                    setDatosNuevoCotizado({
                                                        nombre: "",
                                                        correo: "",
                                                        numero: "",
                                                    })
                                                    setVerDatosNuevoCotizado(!verDatosNuevoCotizado)

                                                } else {
                                                    setVerDatosNuevoCotizado(!verDatosNuevoCotizado)
                                                }
                                            }} className="btn-cambiar-colaborador-cotizacion">
                                                <label>{verDatosNuevoCotizado ? "Eliminar Colaborador" : "Asignar Colaborador"}</label>
                                            </div>

                                            <strong style={{ marginTop: '10px' }}>Datos Generales</strong>
                                            <div className='cont-div-inputs'>
                                                <div>
                                                    <label>Nombre(s)</label>
                                                    <input onChange={(e) => {
                                                        setDatosNuevoCotizado({
                                                            ...datosNuevoCotizado,
                                                            nombre: e.target.value
                                                        })
                                                    }} name="nombre" value={datosNuevoCotizado?.nombre ? datosNuevoCotizado?.nombre : ""} type="text" placeholder="Nombre(s)" />
                                                </div>
                                                <div>
                                                    <label>Correo Electrónico</label>
                                                    <input onChange={(e) => {
                                                        setDatosNuevoCotizado({
                                                            ...datosNuevoCotizado,
                                                            correo: e.target.value
                                                        })
                                                    }} name="apellidos" value={datosNuevoCotizado?.correo ? datosNuevoCotizado?.correo : ""} type="text" placeholder="Correo" />
                                                </div>
                                            </div>

                                            <div className='cont-div-inputs'>
                                                <div>
                                                    <label>Número Contacto</label>
                                                    <input onChange={(e) => {
                                                        setDatosNuevoCotizado({
                                                            ...datosNuevoCotizado,
                                                            numero: e.target.value
                                                        })
                                                    }} name="nombre" value={datosNuevoCotizado?.numero ? datosNuevoCotizado?.numero : ""} type="text" placeholder="Número" />
                                                </div>
                                                <div>

                                                </div>
                                            </div>

                                        </div>
                                        :
                                        <></>
                                    :
                                    <></>
                                :
                                <></>
                            }

                            {Object.keys(planSelect).length > 0 ?
                                enviado ?
                                    <div className="spinner-border text-dark" role="status">
                                        <strong style={{ color: 'white' }}>O</strong>
                                    </div>
                                    :
                                    <div className="cont-prim-btns-cotizador" style={{ marginTop: '20px' }}>
                                        <Button variant="primary" onClick={() => {
                                            enviarDatos()
                                        }} > <i className="fas fa-file-pdf"></i> DESCARGAR COTIZACIÓN</Button>

                                        <Button className="btn-apartar-form" onClick={() => {
                                            cotizarAlert(datosLote?.nombre)
                                        }} style={{ marginLeft: '20px' }} variant="secondary" ><i className="fas fa-money-check-alt"></i> APARTAR</Button>

                                    </div>
                                :
                                <></>
                            }

                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setPlanSelect({})
                        setAbrirModal(!abrirModal)
                    }} >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div >


    )
}


export default CotizadorInteractivo;