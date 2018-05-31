import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    
    switch(action.type) {
        case types.LOAD_COURSE_SUCCESS :
            //debugger;
            return action.courses;
        case types.CREATE_COURSE_SUCCESS :
            //debugger;
            return [
                ...state, Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSE_SUCCESS :
            //debugger;
            return [
                ...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)
            ];
        default:
            return state;
    }    

}