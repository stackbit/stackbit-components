import React, { useState } from 'react';
import yaml from 'js-yaml';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';

import './style.css';

const StackbitFrontmatter = (props) => {
    const { args, title, docsPage } = props;
    const yamlObject = yaml.dump(args);
    const [copied, setCopied] = useState(false);
    return (
        <div className="sb-frontmatter-addon">
            {title && <h2>{title}</h2>}
            <div className={docsPage ? 'sb-frontmatter-docs' : ''}>
                <div className="sb-frontmatter-copy">
                    <CopyToClipboard text={yamlObject} onCopy={() => setCopied(true)}>
                        <button className="sb-frontmatter-button">Copy Code</button>
                    </CopyToClipboard>
                </div>
                <div className="sb-frontmatter-code">
                    <Highlight {...defaultProps} code={yamlObject} theme={github} language="yml">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={className} style={style}>
                                {tokens.map((line, i) => (
                                    <div {...getLineProps({ line, key: i })}>
                                        {line.map((token, key) => (
                                            <span {...getTokenProps({ token, key })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </div>
            </div>
        </div>
    );
};

export default StackbitFrontmatter;
