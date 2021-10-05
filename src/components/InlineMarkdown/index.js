import * as React from 'react';
import Markdown from 'markdown-to-jsx';

export default function InlineMarkdown(props) {
    return (
        <Markdown options={{ wrapper: React.Fragment, overrides }}>
            {props.children}
        </Markdown>
    );
}

const overrides = {
    div: {
        component: (props) => {
            return props.children;
        }
    },
    p: {
        component: (props) => {
            return props.children;
        }
    }
};