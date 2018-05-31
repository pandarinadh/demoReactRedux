import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';


export function loadAuthorSuccess(authors) {
    //debugger;
    return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}


export function loadAuthors() {
    return function(dispatch) {
        return authorApi.getAllAuthors().then(
            authors => { dispatch(loadAuthorSuccess(authors));
        }).catch( error => {
            throw(error);
        });
    };
}