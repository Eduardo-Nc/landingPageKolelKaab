import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';

//redux
import { cambiarLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;



export const findNotifications = () => {
    return async (dispatch) => {

        try {
            await axios.get(baseUrl + '/notification').then(response => {

                // console.log(response.data)
                dispatch(findnoti(response.data))

            })
        } catch (error) {
            console.log(error.response)
        }
    }

}


export const saveNotification = (data) => {

    return async (dispatch) => {

        try {

            await axios.post(baseUrl + "/notification/new", data, {

            })
                .then(response => { })

        } catch (error) { }

        dispatch(findNotifications())

    }
}


export const updateNotification = (data, id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/notification/" + id, data, {

            })
                .then(response => { })

        } catch (error) { }

        dispatch(findNotifications())

    }
}


export const deleteNotification = (id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/notification/delete/" + id, {
                status: false
            })
                .then(response => { })

        } catch (error) { }

        dispatch(findNotifications())

    }
}



const findnoti = (data) => ({
    type: types.findNotifications,
    payload: data
})




