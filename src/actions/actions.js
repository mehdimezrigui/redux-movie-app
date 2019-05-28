export const ADD_MOVIE= 'ADD_MOVIE'
export const GET_RATING= 'GET_RATING'
export const addmovie=(payload)=>{
    return(
    {type: ADD_MOVIE,
    payload }
    )
}
export const getrating=(payload)=>{
    return(
    {type: GET_RATING,
    payload }
    )
}
