import { types } from '../types/types';

const initialState = {
    permitsData: [],
    permitsDataProfile: []
}


export const permitsReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findPermits:
            return {
                ...state,
                permitsData: action.payload
            }

        case types.findPermits2:
            return {
                ...state,
                permitsDataProfile: action.payload
            }



        default:
            return state;
    }
}



