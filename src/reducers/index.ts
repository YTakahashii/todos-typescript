import { combineReducers } from 'redux';
import todoStates from './TodoState/TodoStates';

const rootReducer = combineReducers({
    todoStates: todoStates
});

export default rootReducer;