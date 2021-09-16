import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import componentsManifest from '../../../src/components-manifest.json';
import './style.css';

const getModel = async (modelName) => {
    const modelYamlFile = await axios.get(`/models/${modelName}.yaml`);
    const modelYamlData = yaml.load(modelYamlFile.data, 'utf8');
    const yamlObject = yaml.dump(modelYamlData);
    return yamlObject;
};

const StackbitModels = (props) => {
    const { args, title, docsPage } = props;
    const [copied, setCopied] = useState(false);
    const [yamlObject, setYamlObject] = useState(null);

    useEffect(async () => {
        const type = args.type || args.layout;
        if (type) {
            const modelType = componentsManifest[type];
            const modelName = modelType.modelName;
            if (modelName) {
                const result = await getModel(modelName);
                setYamlObject(result);
            }
        }
    }, [args]);

    return (
        <div className="sb-models">
            {title && <h2>{title}</h2>}
            <div className={docsPage ? 'sb-models-docs' : ''}>
                <div className="sb-models-copy">
                    <CopyToClipboard text={yamlObject} onCopy={() => setCopied(true)}>
                        <button className="sb-models-button">Copy Code</button>
                    </CopyToClipboard>
                </div>
                {yamlObject && (
                    <div className="sb-models-code">
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
                )}
            </div>
        </div>
    );
};

export default StackbitModels;
