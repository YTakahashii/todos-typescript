export enum VisibilityFilters {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED= 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export default interface IVisibilityFilterState {
    filter: VisibilityFilters;
}