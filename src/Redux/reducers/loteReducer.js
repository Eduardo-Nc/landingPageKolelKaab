import { types } from '../types/types';

const initialState = {
    lotesData: [],
    loteByIdData: []
}


export const loteReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findLote:
            return {
                ...state,
                lotesData: action.payload
            }

        case types.findLoteById:
            return {
                ...state,
                loteByIdData: action.payload
            }


        default:
            return state;
    }
}



