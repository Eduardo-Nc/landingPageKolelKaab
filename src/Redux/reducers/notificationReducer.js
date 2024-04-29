import { types } from '../types/types';

const initialState = {
    notificationData: [],
}


export const notificationReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findNotifications:
            return {
                ...state,
                notificationData: action.payload
            }


        default:
            return state;
    }
}



