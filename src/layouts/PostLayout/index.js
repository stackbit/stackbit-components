import React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import ImageBlock from '../../components/ImageBlock';
import { getBaseLayoutComponent } from '../../utils/base-layout';
import { getDynamicComponent } from '../../components-registry';

export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const topSections = page.topSections || [];
    const bottomSections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MMMM D, YYYY');

    return (
        <>
            <BaseLayout page={page} site={site}>
                <div className="layout post-layout">
                    {topSections.length > 0 && (
                        <div data-sb-field-path="topSections">
                            {topSections.map((section, index) => {
                                const Component = getDynamicComponent(section.type);
                                if (!Component) {
                                    throw new Error(`no component matching the page section's type: ${section.type}`);
                                }
                                return <Component key={index} {...section} annotationPrefix={`topSections.${index}`} />;
                            })}
                        </div>
                    )}
                    <article className="px-4 sm:px-6 py-14 lg:py-20">
                        <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                            <header className="mb-12 text-center">
                                {page.title && (
                                    <h1 className="text-4xl tracking-tight sm:text-5xl mb-6 max-w-3xl mx-auto" data-sb-field-path="title">
                                        {page.title}
                                    </h1>
                                )}
                                <div className="text-lg">
                                    <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                        {formattedDate}
                                    </time>
                                </div>
                            </header>
                            {page.thumbImage && (
                                <figure className="h-0 w-full pt-1/2 mb-8 relative" data-sb-field-path="thumbImage">
                                    <ImageBlock {...page.thumbImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </figure>
                            )}
                            {page.markdown_content && (
                                <Markdown
                                    options={{ forceBlock: true }}
                                    className="sb-prose max-w-prose mx-auto md:text-lg"
                                    data-sb-field-path="markdown_content"
                                >
                                    {page.markdown_content}
                                </Markdown>
                            )}
                        </div>
                    </article>
                    {bottomSections.length > 0 && (
                        <div data-sb-field-path="bottomSections">
                            {bottomSections.map((section, index) => {
                                const Component = getDynamicComponent(section.type);
                                if (!Component) {
                                    throw new Error(`no component matching the page section's type: ${section.type}`);
                                }
                                return <Component key={index} {...section} annotationPrefix={`bottomSections.${index}`} />;
                            })}
                        </div>
                    )}
                </div>
            </BaseLayout>
        </>
    );
}
