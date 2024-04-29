import { types } from '../types/types';
import Swal from 'sweetalert2';
import axios from 'axios';
// Utikls
import { saveFileAws, saveFileArrayAws } from '../../../src/utils/uploadAws';

// Redux
import { findLoading, cambiarLoading } from './uiAction';

const baseUrl = process.env.REACT_APP_API_URL;

export const findBlogs = (reset) => {
    return async (dispatch) => {
        if (reset) {
            dispatch(findBlog([]))
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/blog').then(response => {
                    dispatch(findBlog(response.data))
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch(findBlog([]))
                // Swal.fire({
                //     title: "¡Error!",
                //     text: `${error.response.data.msg}`,
                //     icon: 'error',
                //     confirmButtonText: "Aceptar",
                //     timer: "4000"
                // });
            }
        }
    }

}

export const createBlog = (data) => {

    return async (dispatch) => {

        dispatch(cambiarLoading(true))

        try {
            await axios.post(baseUrl + "/blog/new", data)
                .then(response => {
                    Swal.fire({
                        title: "¡Blog guardado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "10000"
                    });

                    dispatch(cambiarLoading(false))
                    dispatch(findBlogs());
                    dispatch(abrirModalI());
                })

        } catch (error) {
            dispatch(cambiarLoading(false))
            dispatch(findBlogs());
            dispatch(abrirModalI());
            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "10000"
            });
        }
    }

}


export const updateBlog = (data) => {

    return async (dispatch) => {

        // console.log(data)

        try {

            await axios.put(baseUrl + "/blog/update/" + data._id, data, {

            })
                .then(response => {

                    Swal.fire({
                        title: "¡Blog actualizado con éxito!",
                        text: `${response.data.msg}`,
                        icon: 'success',
                        confirmButtonText: "Aceptar",
                        timer: "4000"
                    });

                    // console.log(response.data.data)

                    dispatch(abrirModalE(false));
                    dispatch(cambiarLoading(false))
                    dispatch(findBlogs())

                })

        } catch (error) {

            dispatch(abrirModalE(false));
            dispatch(cambiarLoading(false))
            dispatch(findBlogs())

            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "50000"
            });

            // dispatch(abrirModalE(false));

        }
    }
}




export const deleteBlog = (id) => {


    return async (dispatch) => {

        try {

            await axios.put(baseUrl + "/blog/delete/" + id, {
                status: false
            })
                .then(response => {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        text: `${response.data.msg}`,
                        showConfirmButton: false,
                        timer: 4000
                    })


                })

        } catch (error) {

            Swal.fire({
                title: "¡Error!",
                text: `${error.response.data.msg}`,
                icon: 'error',
                confirmButtonText: "Aceptar",
                timer: "10000"
            });

        }

        dispatch(findBlogs())

    }
}



export const findForId = (id) => {
    return async (dispatch) => {

        dispatch(findLoading(true))
        try {
            await axios.get(baseUrl + '/blog/forid/' + id).then(response => {
                dispatch({ type: types.findBlogId, payload: response.data })
                dispatch(findLoading(false))
            })
        } catch (error) {
            dispatch(findLoading(false))
            dispatch({
                type: types.findBlogId, payload: {}
            })

        }

    }

}
export const findBlogsUltimos = (reset, id) => {
    return async (dispatch) => {
        if (reset) {
            dispatch({ type: types.findBlogsRecientes, payload: [] })
        } else {
            dispatch(findLoading(true))
            try {
                await axios.get(baseUrl + '/blog/ultimos/' + id).then(response => {
                    // console.log(response.data)
                    dispatch({ type: types.findBlogsRecientes, payload: response.data })
                    dispatch(findLoading(false))
                })
            } catch (error) {
                dispatch(findLoading(false))
                dispatch({ type: types.findBlogsRecientes, payload: [] })
            }
        }
    }

}



const findBlog = (data) => ({
    type: types.findBlog,
    payload: data
})




const abrirModalI = () => ({ type: types.openModalInsert })
const abrirModalE = (value) => ({ type: types.openModalEdit, payload: value })

