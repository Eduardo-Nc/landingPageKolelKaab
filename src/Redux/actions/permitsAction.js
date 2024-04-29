import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';

//redux
import { cambiarLoading, findLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;


export const findPermitsProfiles = () => {
    return async (dispatch) => {


        dispatch(findLoading(true))
        try {
            await axios.get(baseUrl + '/permit').then(response => {

                dispatch(findPermit2(response.data))

            })
        } catch (error) {

            dispatch(findPermit2([]))
            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "4000"
            });
        }

    }

}



export const findPermits = (reset) => {
    return async (dispatch) => {

        if (reset) {
            // console.log("reset")
            dispatch(findPermit([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/permit').then(response => {

                    // console.log(response.data)
                    dispatch(findPermit(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(findPermit([]))
                Swal.fire({
                    title: "¡Error!",
                    text: `${error.response.data.msg}`,
                    icon: 'error',
                    confirmButtonText: "Aceptar",
                    timer: "4000"
                });
            }
        }
    }

}


export const savePermit = (data) => {
    return async (dispatch) => {

        try {
            await axios.post(baseUrl + "/permit/new", {
                name: data.name,
                description: data.description,
                status: true
            })
                .then(response => {

                    Swal.fire({
                        title: "¡Data saved successfully!",
                        // text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    dispatch(cambiarLoading(false))
                    dispatch(findPermits(false))
                    dispatch(abrirModalI());

                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findPermits(false))
            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "10000"
            });

            dispatch(abrirModalI());
        }
    }
}


export const updatePermit = (id, data) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/permit/update/" + id, data)
                .then(response => {

                    dispatch(findPermits(false))
                    dispatch(cambiarLoading(false))
                    dispatch(abrirModalE());


                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        text: `${response.data.msg}`,
                        showConfirmButton: false,
                        timer: 4000
                    })

                })

        } catch (error) {
            dispatch(findPermits(false))
            dispatch(cambiarLoading(false))
            dispatch(abrirModalE());
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


export const deletePermit = (id) => {

    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/permit/delete/" + id, {
                status: false
            })
                .then(response => {

                    dispatch(findPermits(false))
                    dispatch(cambiarLoading(false))

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        text: `${response.data.msg}`,
                        showConfirmButton: false,
                        timer: 4000
                    })

                })

        } catch (error) {
            dispatch(findPermits(false))
            dispatch(cambiarLoading(false))
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

const findPermit = (permits) => ({
    type: types.findPermits,
    payload: permits
})

const findPermit2 = (permits) => ({
    type: types.findPermits2,
    payload: permits
})


const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })