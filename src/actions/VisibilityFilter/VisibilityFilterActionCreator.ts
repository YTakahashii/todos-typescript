import { VisibilityFilters } from 'src/states/VisibilityFilterState';
import { ISetVisibilityFilterAction } from './VisibilityFilterAction';
import VisibilityFilterActionType from './VisibilityFilterActionType';

//本家のreturnを省略した形
export const setVisibilityFilter = (filter: VisibilityFilters): ISetVisibilityFilterAction => (
    {
        type: VisibilityFilterActionType.SET_VISIBILITY_FILTER,
        filter: filter
    }
);