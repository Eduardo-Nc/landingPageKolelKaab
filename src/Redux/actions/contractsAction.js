import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';

//redux
import { findLoading, cambiarLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;


export const findPaymentMethod = () => {
    return async (dispatch) => {
        try {
            await axios.get(baseUrl + '/paymentMethod').then(response => {

                dispatch({
                    type: types.findpaymentMethod,
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

export const findContractStatus = () => {
    return async (dispatch) => {
        try {
            await axios.get(baseUrl + '/contractStatus').then(response => {

                dispatch({
                    type: types.findcontractStatus,
                    payload: response.data
                })

            })
        } catch (error) {

            dispatch({
                type: types.findcontractStatus,
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

export const findContracts = (reset) => {

    return async (dispatch) => {
        if (reset) {
            dispatch(saveFindContracts([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/contract').then(response => {
                    // console.log(response.data)
                    dispatch(saveFindContracts(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(saveFindContracts([]))
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



export const saveContract = (data) => {

    return async (dispatch) => {

        try {
            await axios.post(baseUrl + "/contract/new", data)
                .then(response => {

                    Swal.fire({
                        title: "¡Save successful!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });
                    dispatch(findContracts(false))
                    dispatch(cambiarLoading(false))
                    dispatch(abrirModalI());

                })

        } catch (error) {
            dispatch(findContracts(false))
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


export const updateContract = (data) => {


    return async (dispatch) => {

        console.log(data.buyer._id,)

        try {

            await axios.put(baseUrl + "/contract/update/" + data._id, {
                status: data.status,
                buyer: data.buyer._id,
                buyerPlan: data.buyerPlan._id,
                paymentMethod: data.paymentMethod._id,
                contractStartDate: data.contractStartDate,
                contractEndDate: data.contractEndDate,
                contractStatus: data.contractStatus._id,
            })
                .then(response => {

                    dispatch(findContracts(false))
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
            dispatch(findContracts(false))
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



export const deleteContract = (id) => {

    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/contract/delete/" + id, {
                status: false
            })
                .then(response => {

                    dispatch(findContracts(false))
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
            dispatch(findContracts(false))
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


const saveFindContracts = (data) => ({
    type: types.findcontract,
    payload: data
})



const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

