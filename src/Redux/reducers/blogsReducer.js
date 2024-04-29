import { types } from '../types/types';

const initialState = {
    blogsData: [],
    blogsDataId: {},
    blogsDataRecientes: [],
}



export const blogsReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.findBlog:
            return {
                ...state,
                blogsData: action.payload
            }


        case types.findBlogId:
            return {
                ...state,
                blogsDataId: action.payload
            }


        case types.findBlogsRecientes:
            return {
                ...state,
                blogsDataRecientes: action.payload
            }


        default:
            return state;
    }
}



