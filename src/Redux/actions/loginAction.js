import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';
import moment from 'moment';


// Redux
import { cambiarLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;

export const loginStart = (email, password) => {
    return async (dispatch) => {

        if (email.length <= 0) {
            Swal.fire({
                title: "Ingresa tu correo",
                icon: "Aviso",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (password.length <= 0) {
            Swal.fire({
                title: "Ingresa tu contraseña",
                icon: "Aviso",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        } else if (password.length <= 6) {
            Swal.fire({
                title: "Error",
                text: "La contraseña debe tener más de 6 caracteres",
                icon: "Aviso",
                confirmButtonText: "Aceptar",
                timer: "3000"
            });
            return
        }

        dispatch(cambiarLoading(true))


        try {
            await axios.post(baseUrl + '/user/login', {
                correo: email,
                contrasena: password
            }).then(response => {

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('token-init-date', new Date().getTime());

                dispatch(login({
                    uid: response.data.uid,
                    surnames: response.data.apellidos,
                    name: response.data.nombre,
                    email: response.data.correo,
                    rol: response.data.rol,
                    photo: response.data.fotoPerfil,
                    idRol: response.data.idRol,
                    dataUserDB: response.data.dataUserDB
                }))

                dispatch(cambiarLoading(false))


            })
        } catch (error) {
            dispatch(cambiarLoading(false))
            // console.log(error.response)
            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Accept",
                timer: "4000"
            });
            // console.log(error.response.data.errors);
            // console.log(error.response.data.errors.password.msg)

        }


    }

}


export const startChecking = () => {
    return async (dispatch) => {

        try {
            const token = localStorage.getItem('token') || '';

            await axios({
                method: 'post',
                url: `${baseUrl}/user/renew`,
                headers: {
                    'Content-type': 'application/json',
                    'x-token': token
                }
            }).then(response => {
                // console.log(response.data)

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('token-init-date', new Date().getTime());

                dispatch(login({
                    uid: response.data.uid,
                    surnames: response.data.apellidos,
                    name: response.data.nombre,
                    email: response.data.correo,
                    rol: response.data.rol,
                    photo: response.data.fotoPerfil,
                    idRol: response.data.idRol,
                    dataUserDB: response.data.dataUserDB
                }))

            })

        } catch (error) {
            // console.log(error.response);
            dispatch(checkingFinish());
        }

    }
}


export const recoverPasswordStart = (email) => {
    return async (dispatch) => {

        if (email.length <= 0) {
            Swal.fire({
                title: "Ingrese su correo",
                icon: "warning",
                confirmButtonText: "Accept",
                timer: "3000"
            });
            return
        }

        try {
            await axios.put(baseUrl + '/password/forgot-password', {
                correo: email
            }).then(response => {

                Swal.fire({
                    title: "¡Enviado!",
                    text: `${response.data.msg}`,
                    icon: 'success',
                    confirmButtonText: "Accept",
                    timer: "7500"
                });

            })
        } catch (error) {
            Swal.fire({
                title: "¡Error!",
                text: `${error.response ? error.response.data.msg : "An error was detected while sending your credentials, contact the administrator"}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "6500"
            });
            // console.log(error.response.data.errors);
            // console.log(error.response.data.errors.password.msg)
        }
    }

}


export const resetPasswordStart = (resetLink, newPassword) => {
    return async (dispatch) => {



        try {
            await axios.put(baseUrl + '/password/reset-password', {
                resetLink,
                newPassword
            }).then(response => {

                Swal.fire({
                    title: "¡Updated Password!",
                    text: `${response.data.msg}`,
                    icon: 'success',
                    confirmButtonText: "Accept",
                    timer: "6500"
                });

            })
        } catch (error) {
            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Accept",
                timer: "6500"
            });
        }
    }

}


const login = (user) => ({
    type: types.authLogin,
    payload: user
})

const checkingFinish = () => ({ type: types.authCheckingFinish });


export const startLogout = () => {
    return (dispatch) => {

        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout })