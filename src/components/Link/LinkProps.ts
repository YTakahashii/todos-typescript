import { VisibilityFilters } from 'src/states/VisibilityFilterState';

export interface ILinkOwnProps {
    filter: VisibilityFilters;
    children?: React.ReactNode;
}

export interface ILinkConnectedProps {
    active: boolean;
}

export interface ILinkDispatchProps {
    onClick: () => void;
}

type LinkProps = ILinkOwnProps & ILinkConnectedProps & ILinkDispatchProps;
export default LinkProps;