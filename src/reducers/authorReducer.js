import * as types from '../actions/actionTypes';

export default function authorReducer(state = [], action) {
    
    switch(action.type) {
        case types.LOAD_AUTHOR_SUCCESS :
            //debugger;
            return action.authors;
        default:
            return state;
    }    

}