import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { useParameter, useArgs } from '@storybook/api';
import ArgsYaml from './ArgsYaml';
import './style.css';

const ADDON_ID = 'argsYaml';
const PANEL_ID = `${ADDON_ID}/panel`;
const PARAM_KEY = 'argsYaml';

const PanelArgsYaml = () => {
    const [args, updateArgs, resetArgs] = useArgs();
    let data = args;
    const param = useParameter(PARAM_KEY, null);
    if (param?.root) {
        data = args[param.root];
    }
    return (
        <div className="args-yaml-panel">
            <ArgsYaml args={data} />
        </div>
    );
};

addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Frontmatter',
        render: ({ active, key }) => (
            <AddonPanel active={active} key={key}>
                <PanelArgsYaml />
            </AddonPanel>
        )
    });
});
