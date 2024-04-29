import { types } from '../types/types';

const initialState = {
    propiedadesData: [],
    propiedadesUltimosData: [],
    tipoOfertaData: [],
    tipoInmuebleData: [],
    tipoPagoData: [],
    propiedadesCount: 0,
    propiedadIdData: {
        galeria: []
    }
}


export const propiedadesReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findPropiedades:
            return {
                ...state,
                propiedadesData: action.payload
            }

        case types.findPropiedadesId:
            return {
                ...state,
                propiedadIdData: action.payload
            }

        case types.findPropiedadesUltimos:
            return {
                ...state,
                propiedadesUltimosData: action.payload
            }

        case types.findPropiedadesCount:
            return {
                ...state,
                propiedadesCount: action.payload
            }

        case types.findTipoOfertas:
            return {
                ...state,
                tipoOfertaData: action.payload
            }


        case types.findTipoInmuebles:
            return {
                ...state,
                tipoInmuebleData: action.payload
            }

        case types.findTipoPagos:
            return {
                ...state,
                tipoPagoData: action.payload
            }


        default:
            return state;
    }
}



