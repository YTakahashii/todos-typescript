import * as React from 'react';
import LinkProps from './LinkProps';

const Link = (props: LinkProps) => {
    const { onClick, active, children } = props;

    return (
        <button
            onClick={onClick}
            disabled={active}
            style={{
                marginLeft: '4px'
            }}
        >
            {children}
        </button>
    );
}

export default Link;