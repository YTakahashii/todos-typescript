import * as React from 'react';
import FilterLink from 'src/containers/(Filter)Link/Link';
import { VisibilityFilters } from 'src/states/VisibilityFilterState';

const Footer = () => (
    <div>
        <span>フィルター: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            全て
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            アクティブ
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            完了
        </FilterLink>
    </div>
)

export default Footer;