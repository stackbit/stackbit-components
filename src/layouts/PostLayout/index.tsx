import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import ImageBlock from '../../components/ImageBlock';
import { getBaseLayoutComponent } from '../../utils/base-layout';
import { getComponent } from '../../components-registry';

export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MMMM D, YYYY');

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="layout post-layout">
                <article className="px-4 sm:px-8 py-14 lg:py-20">
                    <div className="max-w-screen-2xl mx-auto">
                        <header className="max-w-screen-md mx-auto mb-12 text-center">
                            {page.title && (
                                <h1 className="text-4xl sm:text-5xl mb-6 max-w-xl mx-auto" data-sb-field-path="title">
                                    {page.title}
                                </h1>
                            )}
                            <div className="text-lg">
                                <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                    {formattedDate}
                                </time>
                                {page.author && postAuthor(page.author)}
                            </div>
                        </header>
                        {page.featuredImage && (
                            <figure className="h-0 w-full pt-9/16 max-w-screen-xl mx-auto mb-8 relative" data-sb-field-path="featuredImage">
                                <ImageBlock {...page.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                            </figure>
                        )}
                        {page.markdown_content && (
                            <Markdown options={{ forceBlock: true }} className="sb-markdown max-w-screen-md mx-auto" data-sb-field-path="markdown_content">
                                {page.markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {sections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} annotationPrefix={`bottomSections.${index}`} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function postAuthor(author) {
    return (
        <div data-sb-field-path="author">
            {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
            {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
        </div>
    );
}
