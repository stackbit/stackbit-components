import * as React from 'react';

// Simulate next/link behavior
export default function Link(props: React.PropsWithChildren<{ href: string }>) {
    const childrenWithProps = React.Children.map(props.children, (child) => {
        // checking isValidElement is the safe way and avoids a typescript error too
        if (React.isValidElement(child) && child.type === 'a') {
            return React.cloneElement(child, { href: props.href });
        }
        return child;
    });

    return <>{childrenWithProps}</>;
}
