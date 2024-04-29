import { types } from '../types/types';

const initialState = {
    defaultColors: {
        header: "#5F004D",
        btn_normal: "#6c757d",
        btn_hover: "#5a6268"
    },
    abrirM: false,
    mostrarMenu: false,
    abrirN: false,
    mostrarNotification: false,
    showModalInsert: false,
    showModalEdit: false,
    showModalSee: false,
    loading: false,
    loadingFind: false,
    planesData: [
        { _id: 1, meses: 0, descuento: 0 },
        { _id: 2, meses: 0, descuento: 15 },
        { _id: 3, meses: 48, descuento: 0 },
        { _id: 4, meses: 36, descuento: 0 },
        { _id: 5, meses: 24, descuento: 0 },
        { _id: 6, meses: 12, descuento: 0 },
        { _id: 7, meses: 6, descuento: 0 },
    ]
}


export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.openMenu:
            return {
                ...state,
                abrirM: !state.abrirM
            }
        case types.verMenu:
            return {
                ...state,
                mostrarMenu: !state.mostrarMenu
            }
        case types.openNotifications:
            return {
                ...state,
                abrirN: !state.abrirN
            }
        case types.verNotification:
            return {
                ...state,
                mostrarNotification: !state.mostrarNotification
            }
        case types.openModalInsert:
            return {
                ...state,
                showModalInsert: !state.showModalInsert
            }
        case types.openModalEdit:
            return {
                ...state,
                showModalEdit: action.payload
            }
        case types.openModalSee:
            return {
                ...state,
                showModalSee: action.payload
            }
        case types.handleLoading:
            return {
                ...state,
                loading: action.payload
            }

        case types.findLoading:
            return {
                ...state,
                loadingFind: action.payload
            }
        default:
            return state;
    }
}
