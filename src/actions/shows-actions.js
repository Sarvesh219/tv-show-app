import { getShowsAPI } from '../apis/shows-api';

import {
    GET_SHOWS_FAILED,
    GET_SHOWS_INIT,
    GET_SHOWS_SUCCESS,
    TOGGLE_FAVORITE
} from '../actions/constants';

export function getShows() {
    return dispatch => {
        dispatch({ type: GET_SHOWS_INIT });
        getShowsAPI()
            .then(response => dispatch({
                type: GET_SHOWS_SUCCESS, response
            }))
            .catch(error => dispatch({
                type: GET_SHOWS_FAILED, error
            }));
    }
}

export function toggleFavorite(show) {
    return dispatch => {
        dispatch({ type: TOGGLE_FAVORITE, body: show });
    }
}