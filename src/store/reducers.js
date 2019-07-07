import C from './constants'
import {combineReducers} from 'redux'
import initialState from './initialState.json'

export const projects = (state = initialState,action)=>{
    console.log(action.type)

    switch(action.type){
        case C.PROJECTS.FETCH_ALL :
            return state = {...state,projects:[...action.payload]};

        case C.PROJECTS.FETCH_BY_ID :
            return [...state,action.payload];
        default:
            return state;
    }
}
export const testimonials = (state = initialState,action)=>{
    let newState = []
    switch(action.type){
        case C.TESTIMONIALS.FETCH_ALL :
            return state = [...action.payload];

        case C.TESTIMONIALS.FETCH_BY_ID :
            return [...state,action.payload];
        default:
            return state;
    }
}
export const blog = (state = initialState,action)=>{
    console.log(action.type)

    switch(action.type){
        case C.BLOG.FETCH_ALL_BLOG_POSTS :
            return state = {...state,...action.payload};

        case C.BLOG.FETCH_BY_ID :
            return [...state,action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    projects,
    testimonials,
    blog
});