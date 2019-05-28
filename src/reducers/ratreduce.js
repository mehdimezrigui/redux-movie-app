import {GET_RATING} from '../actions/actions'

export const rating=1

export const ratreduce =(state=rating, action)=>{

    switch(action.type){
        case GET_RATING:
        return action.payload
        default: return state
    }   
    }