import React from 'react';
import classNames from 'classnames';

export default function Badge(props) {
    const { label } = props;
    const classes = props.className || null;

    if (!label) {
        return null;
    }
    return <div className={classNames('component', 'component-block', 'component-badge', classes)}>{label}</div>;
}
