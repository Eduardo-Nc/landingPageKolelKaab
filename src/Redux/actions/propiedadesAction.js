import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';
// Utikls
import { saveFileAws, saveFileArrayAws } from '../../../src/utils/uploadAws';

// Redux
import { findLoading, cambiarLoading } from './uiAction';


const baseUrl = process.env.REACT_APP_API_URL;

export const findTipoOferta = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({
                type: types.findTipoOfertas,
                payload: []
            })
        } else {

            try {
                await axios.get(baseUrl + '/tipoOferta').then(response => {
                    dispatch({
                        type: types.findTipoOfertas,
                        payload: response.data
                    })

                })
            } catch (error) {

                dispatch({
                    type: types.findTipoOfertas,
                    payload: []
                })
            }
        }
    }
}

export const findTipoInmueble = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({
                type: types.findTipoInmuebles,
                payload: []
            })
        } else {

            try {
                await axios.get(baseUrl + '/tipoInmueble').then(response => {
                    dispatch({
                        type: types.findTipoInmuebles,
                        payload: response.data
                    })

                })
            } catch (error) {

                dispatch({
                    type: types.findTipoInmuebles,
                    payload: []
                })
            }
        }
    }
}

export const findPropiedadesCount = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({
                type: types.findPropiedadesCount,
                payload: 0
            })
        } else {

            try {
                await axios.get(baseUrl + '/propiedad').then(response => {
                    dispatch({
                        type: types.findPropiedadesCount,
                        payload: response.data.length
                    })

                })
            } catch (error) {

                dispatch({
                    type: types.findPropiedadesCount,
                    payload: 0
                })
            }
        }
    }
}

export const findTipoPago = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({
                type: types.findTipoPagos,
                payload: []
            })
        } else {

            try {
                await axios.get(baseUrl + '/tipoPago').then(response => {
                    // console.log(response.data)
                    dispatch({
                        type: types.findTipoPagos,
                        payload: response.data
                    })

                })
            } catch (error) {

                dispatch({
                    type: types.findTipoPagos,
                    payload: []
                })
            }
        }
    }
}


export const findForId = (id) => {
    return async (dispatch) => {

        dispatch(findLoading(true))
        try {
            await axios.get(baseUrl + '/propiedad/forid/' + id).then(response => {
                dispatch({ type: types.findPropiedadesId, payload: response.data })
                dispatch(findLoading(false))
            })
        } catch (error) {
            dispatch(findLoading(false))
            dispatch({
                type: types.findPropiedadesId, payload: {
                    galeria: []
                }
            })

        }

    }

}

export const findPropiedades = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch(findPropiedad([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/propiedad').then(response => {
                    dispatch(findPropiedad(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(findPropiedad([]))
                // Swal.fire({
                //     title: "¡Error!",
                //     text: `${error.response.data.msg}`,
                //     icon: 'error',
                //     confirmButtonText: "Aceptar",
                //     timer: "4000"
                // });
            }
        }
    }

}

export const findPropiedadesUltimos = (reset, id) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({ type: types.findPropiedadesUltimos, payload: [] })
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/propiedad/ultimos/' + id).then(response => {
                    dispatch({ type: types.findPropiedadesUltimos, payload: response.data })
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch({ type: types.findPropiedadesUltimos, payload: [] })
            }
        }
    }

}



export const createPropiedad = (data) => {

    return async (dispatch) => {

        dispatch(cambiarLoading(true))


        let arrayUrls = []


        const saveFiles = async () => {
            return await Promise.all(data.galeriaData.map(async (file) => {
                let url = await saveFileAws(file)
                // console.log(url)
                return url
            }));
        }


        if (data.galeriaData !== undefined) {
            if (data.galeriaData.length > 0) {
                arrayUrls = await saveFiles()
            }
        }

        data.galeria = arrayUrls;


        try {
            await axios.post(baseUrl + "/propiedad/new", data)
                .then(response => {
                    Swal.fire({
                        title: "¡Propiedad guardado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "10000"
                    });

                    dispatch(cambiarLoading(false))
                    dispatch(findPropiedades());
                    dispatch(abrirModalI());
                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findPropiedades());
            dispatch(abrirModalI());
            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "10000"
            });
        }
    }

}


export const updatePropiedad = (data) => {

    return async (dispatch) => {

        // console.log(data)

        try {

            await axios.put(baseUrl + "/propiedad/update/" + data._id, data, {

            })
                .then(response => {

                    Swal.fire({
                        title: "¡Propiedad actualizado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    // console.log(response.data.data)

                    dispatch(abrirModalE(false));
                    dispatch(cambiarLoading(false))
                    dispatch(findPropiedades())

                })

        } catch (error) {

            dispatch(abrirModalE(false));
            dispatch(cambiarLoading(false))
            dispatch(findPropiedades())

            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "50000"
            });

            // dispatch(abrirModalE(false));

        }
    }
}




export const deletePropiedad = (id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/propiedad/delete/" + id, {
                status: false
            })
                .then(response => {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        text: `${response.data.msg}`,
                        showConfirmButton: false,
                        timer: 4000
                    })


                })

        } catch (error) {

            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "10000"
            });

        }

        dispatch(findPropiedades())

    }
}



const findPropiedad = (data) => ({
    type: types.findPropiedades,
    payload: data
})




const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

