import {FETCH_SMURFS_START,
FETCH_SMURFS_SUCCESS,
FETCH_SMURFS_FAILURE,
ADD_SMURFS_START,
ADD_SMURFS_SUCCESS,
ADD_SMURFS_FAILURE} from '../actions';

const initialState={
    smurfs:[],
    isLoading:false,
    error:''
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading:true,
                error:'',
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                error:'',
                smurfs: [...state.smurfs,...action.payload]
            }
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:action.payload,
            }
        case ADD_SMURFS_START:
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        case ADD_SMURFS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                smurfs: action.payload,
                error:'',
            }
        case ADD_SMURFS_FAILURE:
            return{
                 ...state,
                isLoading:false,
                error:action.payload,
                }
        default:
            return state;
    }
}