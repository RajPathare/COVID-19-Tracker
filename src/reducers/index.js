
import { combineReducers } from 'redux';
import listReducer from './listReducer';
import totalReducer from './totalReducer';


export default combineReducers({
    confirmedcases: listReducer,
    totalReducer: totalReducer
})