import React, { useState } from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { useParameter, useArgs } from '@storybook/api';
import YAML from 'json-to-pretty-yaml';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './style.css';

const ADDON_ID = 'argsYaml';
const PANEL_ID = `${ADDON_ID}/panel`;
const PARAM_KEY = 'argsYaml';

const MyPanel = () => {
    const [args, updateArgs, resetArgs] = useArgs();
    let data = args;
    const param = useParameter(PARAM_KEY, null);
    if (param?.root) {
        data = args[param.root];
    }
    const yaml = YAML.stringify(data);
    const frontmatter = `---\n${yaml}\n---`;
    const [copied, setCopied] = useState(false);
    return (
        <div className="ay">
            <div>
                <CopyToClipboard text={yaml} onCopy={() => setCopied(true)}>
                    <button>Copy Code</button>
                </CopyToClipboard>
            </div>
            <code>
                <pre>{yaml}</pre>
            </code>
        </div>
    );
};

// give a unique name for the panel

addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'YAML',
        render: ({ active, key }) => (
            <AddonPanel active={active} key={key}>
                <MyPanel />
            </AddonPanel>
        )
    });
});
