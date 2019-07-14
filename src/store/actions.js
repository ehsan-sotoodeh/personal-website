import C from './constants'
import { BlogService } from '../services/blog.service'



export const fetchOneProjectById = (projectId) => async (dispatch , getState) =>{
    try{ 
        let page = await BlogService.fetchPageById(projectId);
        dispatch({
            type: C.PROJECTS.FETCH_BY_ID,
            payload: page
        });
    }catch(error){
        return new Error(error)

    }
}

export const fetchAllPosts = (maxResults) => async (dispatch , getState) =>{

    try{
       let posts = await BlogService.fetchAllPosts(maxResults);
        dispatch({
            type: C.BLOG.FETCH_ALL_BLOG_POSTS,
            payload: posts
        });
    }catch(error){
        return new Error(error)

    }
}

export const fetchPostById = (postId) => async (dispatch , getState) =>{

    try{
       let posts = await BlogService.fetchPostById(postId);
        dispatch({
            type: C.BLOG.FETCH_POST_BY_ID,
            payload: posts
        });
    }catch(error){
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