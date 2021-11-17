import * as React from 'react';
import { getComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../utils/base-layout';

export default function PostFeedLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { title, topSections = [], bottomSections = [], pageIndex, numOfPages, numOfTotalItems, ...rest } = page;
    const PostFeedSection = getComponent('PostFeedSection');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="layout page-layout">
                {title && (
                    <h1 className="sr-only" data-sb-field-path="title">
                        {title}
                    </h1>
                )}
                {renderSections(topSections, 'topSections')}
                <div data-sb-field-path="sections">
                    <PostFeedSection {...rest} />
                </div>
                {renderSections(bottomSections, 'bottomSections')}
            </main>
        </BaseLayout>
    );
}

function renderSections(sections: any[], fieldName: string) {
    if (sections.length === 0) {
        return null;
    }
    return (
        <div data-sb-field-path="sections">
            {sections.map((section, index) => {
                const Component = getComponent(section.type);
                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${section.type}`);
                }
                return (
                    <div key={index} data-sb-field-path={`${fieldName}.${index}`}>
                        <Component {...section} />
                    </div>
                );
            })}
        </div>
    );
}
