import C from './constants'
import { BlogService } from '../services/blog.service'


export const fetchAllProjects = () => async (dispatch , getState) =>{

    try{
        dispatch({
            type: C.PROJECTS.FETCH_ALL,
            payload: ""
        });
    }catch(error){
        console.log(error)
        return new Error(error)

    }
}
export const fetchOneProjectById = (projectId) => async (dispatch , getState) =>{

    try{ 

        dispatch({
            type: C.PROJECTS.FETCH_BY_ID,
            payload: projectId
        });
    }catch(error){
        return new Error(error)

    }
}

export const fetchAllPosts = () => async (dispatch , getState) =>{

    try{
       let posts = await BlogService.fetchAllPosts(3);
        console.log(posts)
        dispatch({
            type: C.BLOG.FETCH_ALL_BLOG_POSTS,
            payload: posts
        });
    }catch(error){
        console.log(error)
        return new Error(error)

    }
}

export const fetchPostById = (postId) => async (dispatch , getState) =>{

    try{
       let posts = await BlogService.fetchPostById(postId);
        console.log(posts)
        dispatch({
            type: C.BLOG.FETCH_POST_BY_ID,
            payload: posts
        });
    }catch(error){
        console.log(error)
        return new Error(error)

    }
}







// export const fetchAllPosts = () => async (dispatch , getState) =>{

//     try{

//         dispatch({
//             type: C.PROJECTS.FETCH_BY_ID,
//             payload: "projectId"
//         });
//     }catch(error){
//         return new Error(error)

//     }
// }





// export const fetchAllPosts = (maxResults) => async (dispatch , getState) =>{
//     try{
//         // console.log("fetchAllPosts")
//         // let posts = await BlogService.fetchAllPosts(maxResults);
//         // console.log(posts)
//         dispatch({
//             type: C.POST.FETCH_ALL,
//             payload: "posts"
//         });
//     }catch(error){
//         console.log("erorrrrrr")

//         console.log(error)
//         return new Error(error)

//     }
// }
// export const fetchOnePostById = (projectId) => async (dispatch , getState) =>{

//     try{

//         dispatch({
//             type: C.POST.FETCH_BY_ID,
//             payload: projectId
//         });
//     }catch(error){
//         return new Error(error)

//     }
// }