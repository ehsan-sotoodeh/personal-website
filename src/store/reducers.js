import C from './constants'
import {combineReducers} from 'redux'
import initialState from './initialState.json'

export const projects = (state = initialState,action)=>{
    switch(action.type){
        case C.PROJECTS.FETCH_ALL :
            return state = {...state,projects:[...action.payload]};

        case C.PROJECTS.FETCH_BY_ID :
            const page = action.payload;
            const newState = state.map(project=>{
                if(project.id === page.id){
                    project.content = page.content;
                }
                return project;
            })
            return [...newState];
        default:
            return state;
    }
}
export const testimonials = (state = initialState,action)=>{
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
    switch(action.type){
        case C.BLOG.FETCH_ALL_BLOG_POSTS :
            return state = [...action.payload];

        case C.BLOG.FETCH_POST_BY_ID :
            return state = [...state,action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    projects,
    testimonials,
    blog
});