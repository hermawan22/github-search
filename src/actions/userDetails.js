import axios from 'axios';

export const FETCH_USER_DETAILS_START = 'FETCH_USER_DETAILS_START';
export const FETCH_USER_DETAILS_ERROR = 'FETCH_USER_DETAILS_ERROR';

// action type to get repos
export const RECEIVE_USER_DETAILS_REPOS = 'RECEIVE_USER_DETAILS_REPOS';
// action type to get user
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';

const ROOT_URL = 'https://api.github.com/users';

export const fetchUserRepos = (username) => {
    const request = axios.get(`${ROOT_URL}/${username}/repos`);

    return function(dispatch) {
        dispatch({
            type: FETCH_USER_DETAILS_START
        })

        return request.then((response) => {
            dispatch({
                type: RECEIVE_USER_DETAILS_REPOS,
                payload: response
            })
        }).catch((err) => {
            dispatch({
                type: FETCH_USER_DETAILS_ERROR,
                payload: err
            })
        })
    }
}

export const fetchUser = (username) => {
    const request = axios.get(`${ROOT_URL}/${username}`);

    return function(dispatch) {
        dispatch({
            type: FETCH_USER_DETAILS_START
        })

        return request.then((response) => {
            dispatch({
                type: RECEIVE_USER_DETAILS,
                payload: response
            })
        }).catch((err) => {
            dispatch({
                type: FETCH_USER_DETAILS_ERROR,
                payload: err
            })
        })
    }
}

