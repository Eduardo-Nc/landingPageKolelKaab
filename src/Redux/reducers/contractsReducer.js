import { types } from '../types/types';

const initialState = {
    contractsData: [],
    paymentMethodData: [],
    contractStatusData: [],
}


export const contractsReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findcontract:
            return {
                ...state,
                contractsData: action.payload
            }


        case types.findpaymentMethod:
            return {
                ...state,
                paymentMethodData: action.payload
            }

        case types.findcontractStatus:
            return {
                ...state,
                contractStatusData: action.payload
            }


        default:
            return state;
    }
}



