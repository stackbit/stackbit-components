import React from 'react';
import _ from 'lodash';

import BaseLayout from '../base-layout/base-layout';
import TeamSection from '../../components/team-section';
import HeroSection from '../../components/hero-section';

const components = {
    section_team: TeamSection,
    section_hero: HeroSection
};

export default function Landing(props) {
    const siteConfig = _.get(props, 'siteConfig');
    const page = _.get(props, 'page');
    const sections = _.get(page, 'sections');
    const urlPath = _.get(page, '__metadata.urlPath');
    const pageUrl = '/' + _.trimStart(urlPath, '/');

    return (
        <BaseLayout page={page} siteConfig={siteConfig}>
            {_.map(sections, (section, index) => {
                const sectionType = _.get(section, 'type');
                if (!sectionType) {
                    throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
                }
                const Component = components[sectionType];
                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${sectionType}`);
                }
                return <Component key={index} {...section} />;
            })}
        </BaseLayout>
    );
}
