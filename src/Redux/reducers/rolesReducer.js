import { types } from '../types/types';

const initialState = {
    rolesData: [],
    rolesDataUsers: [],
}


export const rolesReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findRoles:
            return {
                ...state,
                rolesData: action.payload
            }

        case types.findRoles2:
            return {
                ...state,
                rolesDataUsers: action.payload
            }

        default:
            return state;
    }
}



