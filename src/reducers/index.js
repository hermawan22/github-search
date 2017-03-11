import { combineReducers } from 'redux';
import searchReducer from './search';
import userDetailsReducer from './userDetails';

const rootReducer = combineReducers({
    search: searchReducer,
    userDetails: userDetailsReducer
});

export default rootReducer;
