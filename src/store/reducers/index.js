import pollsReducer from './polls';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    polls: pollsReducer,

})

export default allReducers;