import { types } from '../types/types';

const initialState = {
    usersData: [],
    genderData: [],
    civilStatusData: [],
    usersContractsData: [],
    countColaboradores: []
}


export const usersReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findUsers:
            return {
                ...state,
                usersData: action.payload
            }

        case types.findAllColaboradores:
            return {
                ...state,
                countColaboradores: action.payload
            }


        case types.findGender:
            return {
                ...state,
                genderData: action.payload
            }

        case types.findCivilStatus:
            return {
                ...state,
                civilStatusData: action.payload
            }

        case types.findUsersContract:
            return {
                ...state,
                usersContractsData: action.payload
            }

        default:
            return state;
    }
}



