import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export const saveFileAws = (file) => {

    let data = new FormData();
    data.append('file', file)

    return new Promise(async (resolve, reject) => {

        await axios.post(REACT_APP_API_URL + "/aws/new", data, {
            headers: {
                'Content-Type': 'multipart/form-data; charset=utf-8;'
            },
            transformRequest: formData => formData,
        })
            .then(function (response) {
                console.log(response.data)
                resolve(response.data)
            })
            .catch(function (error) {
                console.log(error)
                reject(error)
            });

    })
}


export const saveFileArrayAws = (arrayFiles) => {

    // console.log(arrayFiles)

    let data = new FormData();
    data.append('files', arrayFiles)

    return new Promise(async (resolve, reject) => {

        await axios.post(REACT_APP_API_URL + "/aws/newArray", data, {
            headers: {
                'Content-Type': 'multipart/form-data;'
            },
            transformRequest: formData => formData,
        })
            .then(function (response) {
                console.log(response.data)
                resolve(response.data)
            })
            .catch(function (error) {
                console.log(error)
                reject(error)
            });
    })
}