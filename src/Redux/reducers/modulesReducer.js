import { types } from '../types/types';

const initialState = {
    modulesData: [],
    modulesDataPlans: [],
}


export const modulesReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findModules:
            return {
                ...state,
                modulesData: action.payload
            }

        case types.findModules2:
            return {
                ...state,
                modulesDataPlans: action.payload
            }

        default:
            return state;
    }
}



