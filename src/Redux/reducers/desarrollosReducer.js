import { types } from '../types/types';

const initialState = {
    desarrollosData: [],
    etapaDesarrolloData: [],
    estadoLoteData: [],
    desarrollosCount: 0,
}


export const desarrollosReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findDesarrollos:
            return {
                ...state,
                desarrollosData: action.payload
            }

        case types.findDesarrollosCount:
            return {
                ...state,
                desarrollosCount: action.payload
            }

        case types.findEtapaDesarrollo:
            return {
                ...state,
                etapaDesarrolloData: action.payload
            }


        case types.findEstadoLote:
            return {
                ...state,
                estadoLoteData: action.payload
            }



        default:
            return state;
    }
}



