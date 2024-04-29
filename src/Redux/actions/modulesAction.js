import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';

//redux
import { findLoading, cambiarLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;


export const findModulesPlans = () => {
    return async (dispatch) => {


        dispatch(findLoading(true))
        try {
            await axios.get(baseUrl + '/module').then(response => {

                dispatch(saveFindModules2(response.data))
            })
        } catch (error) {

            dispatch(saveFindModules2([]))
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


export const findModule = (reset) => {

    return async (dispatch) => {
        if (reset) {
            dispatch(saveFindModules([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/module').then(response => {
                    // console.log(response.data)
                    dispatch(saveFindModules(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(saveFindModules([]))
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



export const saveModule = (data) => {

    return async (dispatch) => {


        try {

            await axios.post(baseUrl + "/module/new", {
                colors: {
                    primaryBackground: data.primaryBackground ? data.primaryBackground : "",
                    secondaryBackground: data.secondaryBackground ? data.secondaryBackground : "",
                    mainColor: data.mainColor ? data.mainColor : "",
                    // secondaryColor: data.secondaryColor ? data.secondaryColor : "" ,
                },
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
                    dispatch(findModule(false))
                    dispatch(cambiarLoading(false))
                    dispatch(abrirModalI());

                })

        } catch (error) {
            dispatch(findModule(false))
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


export const updateModule = (id, data) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/module/update/" + id, data)
                .then(response => {

                    dispatch(findModule(false))
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
            dispatch(findModule(false))
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



export const deleteModule = (id) => {

    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/module/delete/" + id, {
                status: false
            })
                .then(response => {

                    dispatch(findModule(false))
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
            dispatch(findModule(false))
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


const saveFindModules = (data) => ({
    type: types.findModules,
    payload: data
})

const saveFindModules2 = (data) => ({
    type: types.findModules2,
    payload: data
})



const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

