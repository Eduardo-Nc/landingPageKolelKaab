import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';
// Utikls
import { saveFileAws, saveFileArrayAws } from '../../../src/utils/uploadAws';

// Redux
import { findLoading, cambiarLoading } from './uiAction';


const baseUrl = process.env.REACT_APP_API_URL;

export const findEtapaDesarrollos = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({
                type: types.findEtapaDesarrollo,
                payload: []
            })
        } else {

            try {
                await axios.get(baseUrl + '/etapaDesarrollo').then(response => {
                    dispatch({
                        type: types.findEtapaDesarrollo,
                        payload: response.data
                    })

                })
            } catch (error) {

                dispatch({
                    type: types.findEtapaDesarrollo,
                    payload: []
                })
            }
        }
    }
}


export const findEstadoLotes = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({
                type: types.findEstadoLote,
                payload: []
            })
        } else {

            try {
                await axios.get(baseUrl + '/estadoLote').then(response => {
                    dispatch({
                        type: types.findEstadoLote,
                        payload: response.data
                    })

                })
            } catch (error) {

                dispatch({
                    type: types.findEstadoLote,
                    payload: []
                })
            }
        }
    }
}

export const findDesarrollosCount = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({
                type: types.findDesarrollosCount,
                payload: 0
            })
        } else {

            try {
                await axios.get(baseUrl + '/desarrollo').then(response => {
                    dispatch({
                        type: types.findDesarrollosCount,
                        payload: response.data.length
                    })

                })
            } catch (error) {

                dispatch({
                    type: types.findDesarrollosCount,
                    payload: 0
                })
            }
        }
    }
}


export const findDesarrollos2 = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch(findDesarrollo([]))
        } else {

            try {
                await axios.get(baseUrl + '/desarrollo').then(response => {
                    dispatch(findDesarrollo(response.data))
                })
            } catch (error) {

                dispatch(findDesarrollo([]))
            }
        }
    }
}


export const findDesarrollos = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch(findDesarrollo([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/desarrollo').then(response => {
                    dispatch(findDesarrollo(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(findDesarrollo([]))
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

export const createDesarrollo = (data) => {

    return async (dispatch) => {

        dispatch(cambiarLoading(true))

        try {
            await axios.post(baseUrl + "/desarrollo/new", data)
                .then(response => {
                    Swal.fire({
                        title: "¡Desarrollo guardado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "10000"
                    });

                    dispatch(cambiarLoading(false))
                    dispatch(findDesarrollos());
                    dispatch(abrirModalI());
                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findDesarrollos());
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


export const updateDesarrollo = (data) => {

    return async (dispatch) => {

        // console.log(data)

        try {

            await axios.put(baseUrl + "/desarrollo/update/" + data._id, data, {

            })
                .then(response => {

                    Swal.fire({
                        title: "¡Desarrollo actualizado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    // console.log(response.data.data)

                    dispatch(abrirModalE(false));
                    dispatch(cambiarLoading(false))
                    dispatch(findDesarrollos())

                })

        } catch (error) {

            dispatch(abrirModalE(false));
            dispatch(cambiarLoading(false))
            dispatch(findDesarrollos())

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




export const deleteDesarrollo = (id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/desarrollo/delete/" + id, {
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

        dispatch(findDesarrollos())

    }
}



const findDesarrollo = (data) => ({
    type: types.findDesarrollos,
    payload: data
})




const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

