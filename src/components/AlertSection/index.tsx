import * as React from 'react';
import classNames from 'classnames';

export default function AlertSection(props) {
    const cssId = props.elementId || null;
    return (
        <div id={cssId} className={classNames('sb-component', 'sb-component-section', 'sb-component-alert-section')}>
            <h1>Alert</h1>
            <p data-sb-field-path=".body">{props.body}</p>
        </div>
    );
}
