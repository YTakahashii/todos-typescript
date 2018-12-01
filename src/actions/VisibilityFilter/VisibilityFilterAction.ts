import VisibilityFilterActionType from './VisibilityFilterActionType';
import { VisibilityFilters } from 'src/states/VisibilityFilterState';

export interface ISetVisibilityFilterAction {
    type: VisibilityFilterActionType.SET_VISIBILITY_FILTER;
    filter: VisibilityFilters;
}

type VisibilityFilterAction = ISetVisibilityFilterAction;
export default VisibilityFilterAction;