import * as React from 'react';
import Link from '../../utils/link';
import { getComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../utils/base-layout';

export default function PostFeedLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { title, topSections = [], bottomSections = [], pageIndex, baseUrlPath, numOfPages, numOfTotalItems, ...rest } = page;
    const PostFeedSection = getComponent('PostFeedSection');

    // blog/category/react
    const pageLinks = [];
    for (let i = 0; i < numOfPages; i++) {
        const urlPath = i === 0 ? baseUrlPath : `${baseUrlPath}/page/${i + 1}`;
        pageLinks.push(
            <Link key={i} href={urlPath}><a>Page {i + 1}</a></Link>
        );
    }

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="layout page-layout">
                {title && (
                    <h1 className="sr-only" data-sb-field-path="title">
                        {title}
                    </h1>
                )}
                {renderSections(topSections, 'topSections')}

                    <PostFeedSection {...rest} />
                    <div>{pageLinks}</div>
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
