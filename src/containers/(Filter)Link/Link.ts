import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import IRootState from 'src/states';
import { ILinkConnectedProps, ILinkOwnProps, ILinkDispatchProps } from 'src/components/Link/LinkProps';
import VisibilityFilterAction from 'src/actions/VisibilityFilter/VisibilityFilterAction';
import { setVisibilityFilter } from 'src/actions/VisibilityFilter/VisibilityFilterActionCreator';
import Link from 'src/components/Link/Link';

const mapStateToProps = (state: IRootState, ownProps: ILinkOwnProps): ILinkConnectedProps => {
    return {
        active: ownProps.filter === state.visibilityFilterState.filter
    };
}

const mapDispatchToProps = (dispatch: Dispatch<VisibilityFilterAction>, ownProps: ILinkOwnProps): ILinkDispatchProps => {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);