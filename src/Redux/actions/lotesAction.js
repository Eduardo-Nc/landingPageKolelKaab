import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';
// Utikls
import { saveFileAws, saveFileArrayAws } from '../../../src/utils/uploadAws';

// Redux
import { findLoading, cambiarLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;



export const findLotesById = (reset, id) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({
                type: types.findLoteById,
                payload: []
            })
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/lote/' + id).then(response => {
                    dispatch({
                        type: types.findLoteById,
                        payload: response.data
                    })
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch({
                    type: types.findLoteById,
                    payload: []
                })
            }
        }
    }

}

export const findLotes = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch(findLote([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/lote').then(response => {
                    dispatch(findLote(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(findLote([]))
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

export const createLote = (data) => {

    return async (dispatch) => {

        dispatch(cambiarLoading(true))

        try {
            await axios.post(baseUrl + "/lote/new", data)
                .then(response => {
                    Swal.fire({
                        title: "¡Lote guardado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "10000"
                    });

                    dispatch(cambiarLoading(false))
                    dispatch(findLotes());
                    dispatch(abrirModalI());
                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findLotes());
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


export const updateLote = (data) => {

    return async (dispatch) => {

        // console.log(data)

        try {

            await axios.put(baseUrl + "/lote/update/" + data._id, data, {

            })
                .then(response => {

                    Swal.fire({
                        title: "¡Lote actualizado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    // console.log(response.data.data)

                    dispatch(abrirModalE(false));
                    dispatch(cambiarLoading(false))
                    dispatch(findLotes())

                })

        } catch (error) {

            dispatch(abrirModalE(false));
            dispatch(cambiarLoading(false))
            dispatch(findLotes())

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




export const deleteLote = (id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/lote/delete/" + id, {
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

        dispatch(findLotes())

    }
}



const findLote = (data) => ({
    type: types.findLote,
    payload: data
})




const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

