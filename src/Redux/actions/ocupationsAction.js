import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';

//redux
import { findLoading, cambiarLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;


export const findOcupationsUsers = () => {
    return async (dispatch) => {
        try {
            await axios.get(baseUrl + '/ocupation').then(response => {

                dispatch(saveFindOcupations2(response.data))

            })
        } catch (error) {

            dispatch(saveFindOcupations2([]))
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

export const findOcupations = (reset) => {

    return async (dispatch) => {
        if (reset) {
            dispatch(saveFindOcupations([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/ocupation').then(response => {
                    // console.log(response.data)
                    dispatch(saveFindOcupations(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(saveFindOcupations([]))
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



export const saveOcupation = (data) => {

    return async (dispatch) => {


        try {

            await axios.post(baseUrl + "/ocupation/new", {

                name: data.name,
                status: true

            })
                .then(response => {

                    Swal.fire({
                        title: "¡Save successful!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });
                    dispatch(findOcupations(false))
                    dispatch(cambiarLoading(false))
                    dispatch(abrirModalI());

                })

        } catch (error) {
            dispatch(findOcupations(false))
            dispatch(cambiarLoading(false))
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


export const updateOcupation = (id, data) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/ocupation/update/" + id, data)
                .then(response => {

                    dispatch(findOcupations(false))
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
            dispatch(findOcupations(false))
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



export const deleteOcupation = (id) => {

    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/ocupation/delete/" + id, {
                status: false
            })
                .then(response => {

                    dispatch(findOcupations(false))
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
            dispatch(findOcupations(false))
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


const saveFindOcupations = (roles) => ({
    type: types.findOcupation,
    payload: roles
})

const saveFindOcupations2 = (roles) => ({
    type: types.findOcupation2,
    payload: roles
})




const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

