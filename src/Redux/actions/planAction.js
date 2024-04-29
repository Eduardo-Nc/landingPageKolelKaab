import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';


//redux
import { cambiarLoading, findLoading } from './uiAction';


const baseUrl = process.env.REACT_APP_API_URL;


export const findPlansContracts = () => {
    return async (dispatch) => {
        try {
            await axios.get(baseUrl + '/plan').then(response => {

                dispatch({
                    type: types.findPlans2,
                    payload: response.data
                })

            })
        } catch (error) {

            dispatch({
                type: types.findpaymentMethod,
                payload: []
            })

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


export const findPlans = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch(findPlan([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/plan').then(response => {

                    dispatch(findPlan(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(findPlan([]))
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





export const savePlan = (data) => {

    return async (dispatch) => {

        try {

            await axios.post(baseUrl + "/plan/new", data)
                .then(response => {
                    dispatch(cambiarLoading(false))
                    dispatch(findPlans(false))
                    Swal.fire({
                        title: "¡Plan agregado!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    dispatch(abrirModalI());

                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findPlans(false))
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


export const updatePlan = (data) => {


    return async (dispatch) => {

        try {


            await axios.put(baseUrl + "/plan/update/" + data._id, data)
                .then(response => {
                    dispatch(cambiarLoading(false))
                    dispatch(findPlans(false))
                    Swal.fire({
                        title: "¡Plan actualizado!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    dispatch(abrirModalE(false));
                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findPlans(false))
            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "10000"
            });

            dispatch(abrirModalE(false));

        }
    }
}


export const deletePlan = (id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/plan/delete/" + id, {
                status: false
            })
                .then(response => {
                    dispatch(cambiarLoading(false))
                    dispatch(findPlans(false))
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        text: `${response.data.msg}`,
                        showConfirmButton: false,
                        timer: 4000
                    })

                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findPlans(false))
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



const findPlan = (data) => ({
    type: types.findPlans,
    payload: data
})




const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

