import { types } from '../types/types';
import axios from 'axios';


const baseUrl = process.env.REACT_APP_API_URL;


export const abrirMenu = () => {
    return (dispatch) => {
        dispatch(abrirM());
        setTimeout(() => {
            dispatch(mostrarSidebar())
        }, 50)
    }
}

export const abrirNotificaciones = () => {
    return (dispatch) => {
        dispatch(abrirN());
        setTimeout(() => {
            dispatch(mostrarNotification())
        }, 50)
    }
}

export const notificarUsuario = (value) => {

    return async (dispatch) => {
        try {
            await axios.post(baseUrl + '/notification/new', {
                forward: value.forward,
                user: value.user,
                title: value.title,
                description: value.description,
                company: value.company,
                routerMovil: value.routerMovil,
                routerDashboard: value.routerDashboard,
                status: true
            }).then(response => { })
        } catch (error) { console.log(error) }
    }
}

export const abrirModalIn = () => {
    return (dispatch) => {
        dispatch(abrirModalI());
    }
}

export const abrirModalEd = (value) => {
    return (dispatch) => {
        dispatch(abrirModalE(value));
    }
}


export const abrirModalSe = (value, caso) => {
    return (dispatch) => {
        dispatch(abrirModalS(value));
        caso !== "editar" && dispatch(abrirModalE(value))
    }
}

export const cambiarLoading = (value) => {
    return (dispatch) => {
        dispatch(cambiarLoad(value));
    }
}

export const findLoading = (value) => {
    return (dispatch) => {
        dispatch(cambiarFindLoad(value));
    }
}

const abrirM = () => ({ type: types.openMenu })

const mostrarSidebar = () => ({ type: types.verMenu })

const abrirN = () => ({ type: types.openNotifications })

const mostrarNotification = () => ({ type: types.verNotification })

const abrirModalI = () => ({ type: types.openModalInsert })

const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

const cambiarLoad = (value) => ({ type: types.handleLoading, payload: value })

const cambiarFindLoad = (value) => ({ type: types.findLoading, payload: value })

const abrirModalS = (value) => ({ type: types.openModalSee, payload: value })


