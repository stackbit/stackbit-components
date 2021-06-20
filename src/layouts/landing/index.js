import React from 'react';

import BaseLayout from '../base-layout/base-layout';
import TeamSection from '../../components/team-section';
import HeroSection from '../../components/hero-section';

const components = {
    section_team: TeamSection,
    section_hero: HeroSection
};

export default function Landing(props) {
    const siteConfig = props?.siteConfig ?? {};
    const page = props?.page ?? {};
    const sections = page?.sections ?? [];
    const urlPath = page?.__metadata?.urlPath ?? '';
    const pageUrl = '/' + urlPath.replace(/^\//, '');

    return (
        <BaseLayout page={page} siteConfig={siteConfig}>
            {sections.map((section, index) => {
                const sectionType = section?.type;
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
