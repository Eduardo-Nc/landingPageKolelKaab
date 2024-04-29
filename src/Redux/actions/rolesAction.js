import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';

//redux
import { cambiarLoading, findLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;




export const findRolesUsers = () => {
    return async (dispatch) => {


        try {
            await axios.get(baseUrl + '/role').then(response => {

                dispatch(findRole2(response.data))

            })
        } catch (error) {


            dispatch(findRole2([]))
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



export const findRoles = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch(findRole([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/role').then(response => {

                    // console.log(response.data)
                    dispatch(findRole(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(findRole([]))
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



export const saveRol = (data) => {

    return async (dispatch) => {
        try {

            await axios.post(baseUrl + "/role/new", data)
                .then(response => {

                    Swal.fire({
                        title: "¡Data saved successfully!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    dispatch(abrirModalI());

                })

        } catch (error) {

            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "10000"
            });

            dispatch(abrirModalI());
        }

        dispatch(cambiarLoading(false))
        dispatch(findRoles())

    }
}



export const updateRol = (data) => {


    return async (dispatch) => {

        try {


            await axios.put(baseUrl + "/role/update/" + data._id, data)
                .then(response => {

                    Swal.fire({
                        title: "¡Rol actualizado!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    dispatch(abrirModalE(false));

                })

        } catch (error) {

            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "10000"
            });

            dispatch(abrirModalE(false));

        }

        dispatch(cambiarLoading(false))
        dispatch(findRoles())

    }
}



export const deleteRol = (id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/role/delete/" + id, {
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

        dispatch(cambiarLoading(false))
        dispatch(findRoles())

    }
}


const findRole = (roles) => ({
    type: types.findRoles,
    payload: roles
})


const findRole2 = (roles) => ({
    type: types.findRoles2,
    payload: roles
})


const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

