import C from './constants'


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