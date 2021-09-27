import * as React from 'react';

// Simulate next/link behavior
export default function Link(props) {
    const childrenWithProps = React.Children.map(props.children, (child) => {
        // checking isValidElement is the safe way and avoids a typescript error too
        if (child.type === 'a' && React.isValidElement(child)) {
            return React.cloneElement(child, { href: props.href });
        }
        return child;
    });

    return <>{childrenWithProps}</>;
}
