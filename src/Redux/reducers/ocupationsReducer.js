import { types } from '../types/types';

const initialState = {
    ocupationsData: [],
    ocupationsDataUsers: [],
}


export const ocupationsReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findOcupation:
            return {
                ...state,
                ocupationsData: action.payload
            }


        case types.findOcupation2:
            return {
                ...state,
                ocupationsDataUsers: action.payload
            }


        default:
            return state;
    }
}



