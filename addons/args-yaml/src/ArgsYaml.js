import React, { useState } from 'react';
import YAML from 'json-to-pretty-yaml';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './style.css';

const ArgsYaml = (props) => {
    const { args, title, docsPage } = props;
    const yaml = YAML.stringify(args);
    const frontmatter = `---\n${yaml}\n---`;
    const [copied, setCopied] = useState(false);
    return (
        <div className="args-yaml">
            {title && <h2>{title}</h2>}
            <div className={docsPage ? 'args-yaml-docs' : ''}>
                <div className="args-yaml-copy">
                    <CopyToClipboard text={yaml} onCopy={() => setCopied(true)}>
                        <button className="args-yaml-button">Copy Code</button>
                    </CopyToClipboard>
                </div>
                <div className="args-yaml-code">
                    <code>
                        <pre>{yaml}</pre>
                    </code>
                </div>
            </div>
        </div>
    );
};

export default ArgsYaml;
