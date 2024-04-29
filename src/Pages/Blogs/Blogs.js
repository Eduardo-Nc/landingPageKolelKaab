import React, { Fragment, useEffect, useState } from 'react';
import './Blogs.css';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import Pdf from '../../img/pdf.png';
import RichTextEditor from './RichTextEditor';

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
import { findBlogs, createBlog, updateBlog, deleteBlog } from '../../Redux/actions/blogAction';



// Utikls
import { saveFileAws, saveFileArrayAws } from '../../../src/utils/uploadAws';

//Images
import Search from '../../img/search.png';



const Blogs = () => {

    const dispatch = useDispatch();

    const { name, rol, uid } = useSelector(state => state.login);
    const { showModalInsert, showModalEdit, showModalSee, loading, loadingFind } = useSelector(state => state.menu)
    const { blogsData } = useSelector(state => state.blogs);



    // Search
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }


    const [title, setTitle] = useState("Blog");
    const [data, setData] = useState([]);
    const [datosF, setDataF] = useState({
        caratula: "",
        caratulaData: "",
        titulo: "",
        contenido: "",
        descripcion: "",
        status: true
    });

    const [columns, setColumns] = useState([{
        dataField: '_id',
        text: 'ID',
        hidden: true
    }, {
        dataField: 'caratula',
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
                    <img src={row.caratula} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
                </div>
            );
        }
    }, {
        dataField: 'titulo',
        text: 'Título', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <label>{row.titulo}</label>
            );
        }
    },
    {
        dataField: 'descripcion',
        text: 'Descripción', sort: true,
        headerAlign: 'center',
        headerStyle: {
            height: '50px',
            border: 'none',
            color: 'white',
            backgroundColor: "black"
        },
        formatter: (cellContent, row) => {
            return (
                <label>{row.descripcion}</label>
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
                dispatch(deleteBlog(row._id))
            }
        })
    }





    const saveData = () => {

        datosF.status = true;

        if (datosF.titulo === "") {
            Swal.fire({
                title: "Nombre es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.caratula === "") {
            Swal.fire({
                title: "Caratula es requerida",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.contenido === "") {
            Swal.fire({
                title: "Contenidoo es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (datosF.descripcion === "") {
            Swal.fire({
                title: "Descripcion es requerido",
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else {

            dispatch(createBlog(datosF))
        }
    }



    const updateData = () => {

        dispatch(updateBlog(datosF))

    }

    const getValue = (value) => {
        setDataF(() => ({
            ...datosF,
            contenido: value
        }))
    };

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


            }
        }
    }



    useEffect(() => {

        dispatch(findBlogs(false))

        return () => {

            dispatch(findBlogs(true))

        }
    }, [])





    useEffect(() => {
        if (search !== "") {
            if (blogsData.length > 0) {
                let result = blogsData.filter(item => item.titulo.toString().toLowerCase().includes(search.toLocaleLowerCase()) || item.descripcion.toString().toLowerCase().includes(search.toLocaleLowerCase()))
                setData(result)
            }
        } else {
            blogsData.length > 0 ? setData(blogsData) : setData([])
        }

    }, [search])

    useEffect(() => {
        if (!loadingFind && data.length === 0) {

        } else {
            if (search === "") {
                blogsData.length > 0 ? setData(blogsData) : setData([])
            }
        }
    }, [data, blogsData])

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
                            <h1>Blogs</h1>
                            <p>{blogsData.length} {blogsData.length > 1 ? "Blogs" : "Blog"}</p>
                        </div>

                        <div className="contenedor-input-search-all">
                            <div className="cont-all-principal-search">
                                <div className="cont-all-input-search">
                                    <div className="cont-ico-input-search">
                                        <img src={Search} alt="lupa" />
                                    </div>
                                    <input onChange={handleSearchChange} value={search} type="text" placeholder="Buscar blog" />
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

            <Modal size="lg" show={showModalInsert} onHide={() => {
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

                        <label className="inputFormLabel">Caratula</label>

                        <div className="cont-caratula-folleto">
                            <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                {
                                    datosF.caratulaData ? <img src={URL.createObjectURL(datosF.caratulaData)} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
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
                                <input className="FileUpload1" onChange={selectedFile} name="caratula" type="file" accept="image/jpeg, image/png" />
                            </label>
                        </div>

                        <label className="inputFormLabel">Título</label>
                        <input type="text" className="inputForm" autoComplete="off" value={datosF?.titulo} name="titulo" onChange={handleChange} placeholder="" required ></input>

                        <label className="inputFormLabel">Descripción breve</label>
                        <textarea type="text" className="inputForm" autoComplete="off" value={datosF?.descripcion} name="descripcion" onChange={handleChange} placeholder="" rows="4" required ></textarea>

                        <label className="inputFormLabel">Contenido</label>
                        <RichTextEditor initialValue="" getValue={getValue} />

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
                    <Modal size="lg" show={showModalEdit} onHide={() => {
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

                                <label className="inputFormLabel">Caratula</label>

                                <div className="cont-caratula-folleto">
                                    <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                        {
                                            datosF.caratula ? <img src={datosF.caratula} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
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
                                        <input className="FileUpload1" onChange={selectedFile} name="caratula" type="file" accept="image/jpeg, image/png" />
                                    </label>
                                </div>

                                <label className="inputFormLabel">Título</label>
                                <input disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.titulo} name="titulo" onChange={handleChange} placeholder="" required ></input>

                                <label className="inputFormLabel">Descripción breve</label>
                                <textarea disabled={showModalSee} type="text" className="inputForm" autoComplete="off" value={datosF?.descripcion} name="descripcion" onChange={handleChange} placeholder="" rows="4" required ></textarea>

                                <label className="inputFormLabel">Contenido</label>
                                <RichTextEditor initialValue={datosF?.contenido ? datosF?.contenido : ""} getValue={getValue} />

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


export default Blogs;