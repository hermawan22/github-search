import { FETCH_SEARCH_START, RECEIVE_SEARCH, FETCH_SEARCH_ERROR } from '../actions/search';
const INTIAL_STATE = { 
    all: [], 
    fetching: false, 
    fetched: false,
    error: null
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type) {
    case FETCH_SEARCH_START:
      return {
        ...state, fetching: true
      }
    case RECEIVE_SEARCH:
      return {
        ...state,
        fetching: false,
        fetched: true,
        all: action.payload.data
      }
    case FETCH_SEARCH_ERROR:
      return{
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}
