import React from 'react';
import classNames from 'classnames';

export default function Badge(props) {
    const { label } = props;
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    if (!label) {
        return null;
    }

    return (
        <div id={cssId} className={classNames('component', 'component-block', 'component-badge', cssClasses)}>
            {label}
        </div>
    );
}
