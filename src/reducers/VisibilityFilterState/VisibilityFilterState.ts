import VisibilityFilterState, { VisibilityFilters } from "src/states/VisibilityFilterState";
import VisibilityFilterAction from 'src/actions/VisibilityFilter/VisibilityFilterAction';
import VisibilityFilterActionType from 'src/actions/VisibilityFilter/VisibilityFilterActionType';

const initialState: VisibilityFilterState = {
    filter: VisibilityFilters.SHOW_ALL
};

const visibilityFilterState = (state: VisibilityFilterState = initialState, action: VisibilityFilterAction): VisibilityFilterState => {
    switch (action.type) {
        case VisibilityFilterActionType.SET_VISIBILITY_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}

export default visibilityFilterState;