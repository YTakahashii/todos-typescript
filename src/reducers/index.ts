import { combineReducers } from 'redux';
import todoStates from './TodoState/TodoStates';
import visibilityFilterState from './VisibilityFilterState/VisibilityFilterState';

const rootReducer = combineReducers({
    todoStates: todoStates,
    visibilityFilterState: visibilityFilterState
});

export default rootReducer;