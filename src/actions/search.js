import axios from 'axios';

export const FETCH_SEARCH_START = 'FETCH_SEARCH_START';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';

const ROOT_URL = 'https://api.github.com/search/users';

export const fetchSearch = (username) => {
    const request = axios.get(`${ROOT_URL}?q=${username}`);

    return function(dispatch) {
        dispatch({
            type: FETCH_SEARCH_START
        })

        return request.then((response) => {
            dispatch({
                type: RECEIVE_SEARCH,
                payload: response
            })
        }).catch((err) => {
            dispatch({
                type: FETCH_SEARCH_ERROR,
                payload: err
            })
        })
    }
}

