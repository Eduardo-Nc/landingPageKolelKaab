import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';


// Redux
import { findLoading, cambiarLoading } from './uiAction';


const baseUrl = process.env.REACT_APP_API_URL;

export const findUsers = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch(findUser([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/user').then(response => {
                    dispatch(findUser(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(findUser([]))
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

export const findUsersColaboradores = () => {
    return async (dispatch) => {

        try {
            await axios.get(baseUrl + '/user/count/usersAll').then(response => {
                dispatch({
                    type: types.findAllColaboradores,
                    payload: response.data
                })

            })
        } catch (error) {
            dispatch({
                type: types.findAllColaboradores,
                payload: 0
            })
        }

    }

}

export const createUser = (data) => {



    return async (dispatch) => {

        let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ12346789";
        let password = "IKK-";
        for (let i = 0; i < 3; i++) password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));

        data.perfil.contrasena = password;

        try {
            await axios.post(baseUrl + "/user/new", data)
                .then(response => {
                    Swal.fire({
                        title: "¡Usuario guardado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "10000"
                    });

                    dispatch(cambiarLoading(false))
                    dispatch(findUsers());
                    dispatch(abrirModalI());
                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findUsers());
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


export const updateUser = (data, dashboard) => {

    return async (dispatch) => {

        // console.log(data)

        try {

            await axios.put(baseUrl + "/user/update/" + data._id, data, {

            })
                .then(response => {

                    Swal.fire({
                        title: "¡Usuario actualizado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    // console.log(response.data.data)
                    if (dashboard !== true) {
                        dispatch(login({
                            uid: response.data.data._id,
                            surnames: response.data.data.perfil.apellidos,
                            name: response.data.data.perfil.nombre,
                            email: response.data.data.perfil.correo,
                            rol: response.data.data.perfil.rol.nombre,
                            photo: response.data.data.perfil.fotoPerfil,
                            idRol: response.data.data.perfil.rol._id,
                            dataUserDB: response.data.data
                        }))
                    }


                    dispatch(abrirModalE(false));
                    dispatch(cambiarLoading(false))
                    dispatch(findUsers())

                })

        } catch (error) {

            dispatch(abrirModalE(false));
            dispatch(cambiarLoading(false))
            dispatch(findUsers())

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


export const updateUserPerfil = (data) => {

    return async (dispatch) => {

        // console.log(data)

        try {

            await axios.put(baseUrl + "/user/update/" + data._id, data, {

            })
                .then(response => {

                    Swal.fire({
                        title: "¡Usuario actualizado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    // console.log(response.data.data)

                    dispatch(login({
                        uid: response.data.data._id,
                        surnames: response.data.data.perfil.apellidos,
                        name: response.data.data.perfil.nombre,
                        email: response.data.data.perfil.correo,
                        rol: response.data.data.perfil.rol.nombre,
                        photo: response.data.data.perfil.fotoPerfil,
                        idRol: response.data.data.perfil.rol._id,
                        dataUserDB: response.data.data
                    }))
                    dispatch(cambiarLoading(false))

                })

        } catch (error) {

            dispatch(cambiarLoading(false))


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

export const deleteUser = (id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/user/delete/" + id, {
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

        dispatch(findUsers())

    }
}


export const findUsersContract = () => {
    return async (dispatch) => {
        try {
            await axios.get(baseUrl + '/user').then(response => {
                dispatch({
                    type: types.findUsersContract,
                    payload: response.data.map(item => {
                        return {
                            name: item.profile.name + " " + item.profile.surnames,
                            photo: item.profile.specific_dates.profile_photo ? item.profile.specific_dates.profile_photo : "https://beyond-life.s3.us-east-2.amazonaws.com/149071.pngs",
                            value: item._id,
                            rol: item.profile.rol._id
                        }
                    })
                })
            })
        } catch (error) {
            dispatch({
                type: types.findUsersContract,
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


export const findGenderUsers = () => {
    return async (dispatch) => {
        try {
            await axios.get(baseUrl + '/gender').then(response => {

                dispatch(saveFindGender(response.data))

            })
        } catch (error) {

            dispatch(saveFindGender([]))
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


export const findCivilStatusUsers = () => {
    return async (dispatch) => {
        try {
            await axios.get(baseUrl + '/civil').then(response => {

                dispatch(saveFindCivil(response.data))

            })
        } catch (error) {

            dispatch(saveFindCivil([]))
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


const findUser = (users) => ({
    type: types.findUsers,
    payload: users
})


const saveFindGender = (data) => ({
    type: types.findGender,
    payload: data
})

const saveFindCivil = (data) => ({
    type: types.findCivilStatus,
    payload: data
})




const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })
const login = (user) => ({
    type: types.authLogin,
    payload: user
})
