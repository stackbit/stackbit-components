import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { useParameter, useArgs } from '@storybook/api';
import StackbitFrontmatter from './StackbitFrontmatter';
import './style.css';

const ADDON_ID = 'StackbitFrontmatter';
const PANEL_ID = `${ADDON_ID}/panel`;
const PARAM_KEY = 'StackbitFrontmatter';

const PanelStackbitFrontmatter = () => {
    const [args, updateArgs, resetArgs] = useArgs();
    let data = args;
    const param = useParameter(PARAM_KEY, null);
    if (param?.root) {
        data = args[param.root];
    }
    return (
        <div className="sb-frontmatter-panel">
            <StackbitFrontmatter args={data} />
        </div>
    );
};

addons.register(ADDON_ID, (api) => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Frontmatter',
        render: ({ active, key }) => (
            <AddonPanel active={active} key={key}>
                <PanelStackbitFrontmatter />
            </AddonPanel>
        )
    });
});
