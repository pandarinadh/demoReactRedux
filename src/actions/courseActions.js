import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';


export function loadCoursesSuccess(courses) {
    //debugger;
    return { type: types.LOAD_COURSE_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
    //debugger;
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
    //debugger;
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses().then(
            courses => { dispatch(loadCoursesSuccess(courses));
        }).catch( error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
  //  debugger;
    return function(dispatch, getState) {
        return courseApi.saveCourse(course).then(
            savedCourse => { 
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
            dispatch(createCourseSuccess(savedCourse));
            
        }).catch( error => {
            throw(error);
        });
    };
}