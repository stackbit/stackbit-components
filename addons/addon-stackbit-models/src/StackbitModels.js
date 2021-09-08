import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
        const modelType = componentsManifest[args.type];
        const modelName = modelType.modelName;
        const result = await getModel(modelName);
        setYamlObject(result);
    }, []);

    return (
        <div className="args-yaml" id="#models">
            <a id="Bar" />
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

export default StackbitModels;
