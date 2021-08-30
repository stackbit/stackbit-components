import React, { useState } from 'react';
import yaml from 'js-yaml';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './style.css';

const ArgsYaml = (props) => {
    const { args, title, docsPage } = props;
    const yamlObject = yaml.dump(args);
    const [copied, setCopied] = useState(false);
    return (
        <div className="args-yaml">
            {title && <h2>{title}</h2>}
            <div className={docsPage ? 'args-yaml-docs' : ''}>
                <div className="args-yaml-copy">
                    <CopyToClipboard text={yamlObject} onCopy={() => setCopied(true)}>
                        <button className="args-yaml-button">Copy Code</button>
                    </CopyToClipboard>
                </div>
                <div className="args-yaml-code">
                    <code>
                        <pre>{yamlObject}</pre>
                    </code>
                </div>
            </div>
        </div>
    );
};

export default ArgsYaml;
