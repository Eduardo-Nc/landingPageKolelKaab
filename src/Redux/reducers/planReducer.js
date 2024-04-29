import { types } from '../types/types';

const initialState = {
    plansData: [],
    plansContractsData: [],
}


export const planReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.findPlans:
            return {
                ...state,
                plansData: action.payload
            }

        case types.findPlans2:
            return {
                ...state,
                plansContractsData: action.payload
            }

        default:
            return state;
    }
}



