import { 
    FETCH_USER_DETAILS_START, 
    RECEIVE_USER_DETAILS_REPOS,
    RECEIVE_USER_DETAILS, 
    FETCH_USER_DETAILS_ERROR 
} from '../actions/userDetails';
const INTIAL_STATE = { 
    user: [],
    repos: [], 
    fetching: false, 
    fetched: false,
    error: null
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER_DETAILS_START:
      return {
        ...state, fetching: true
      }
    case RECEIVE_USER_DETAILS_REPOS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        repos: action.payload.data
      }
    case RECEIVE_USER_DETAILS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload.data
      }
    case FETCH_USER_DETAILS_ERROR:
      return{
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}
