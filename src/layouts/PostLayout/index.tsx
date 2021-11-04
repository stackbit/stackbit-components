import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import ImageBlock from '../../components/ImageBlock';
import Link from '../../utils/link';
import { getBaseLayoutComponent } from '../../utils/base-layout';
import { getComponent } from '../../components-registry';

export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.bottomSections || [];
    const dateTimeAttr = dayjs(page.date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(page.date).format('MMMM D, YYYY');
    const categories = page.categories || [];
    const tags = page.tags || [];

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="layout post-layout">
                <article className="px-4 sm:px-8 py-14 lg:py-20">
                    <div className="max-w-screen-2xl mx-auto">
                        <header className="max-w-screen-md mx-auto mb-12 text-center">
                            {categories.length > 0 && postCategories(categories)}
                            {page.title && (
                                <h1 className="text-4xl tracking-tight sm:text-5xl mb-6 max-w-xl mx-auto" data-sb-field-path="title">
                                    {page.title}
                                </h1>
                            )}
                            <div className="mb-1">
                                <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                    {formattedDate}
                                </time>
                            </div>
                            {page.author && postAuthor(page.author)}
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
                        {tags.length > 0 && postTags(tags)}
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
    if (author.link) {
        return (
            <div>
                By{' '}
                <Link href={author.link} data-sb-field-path="author">
                    <span data-sb-field-path=".firstName">{author.firstName}</span>{' '}
                    {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
                </Link>
            </div>
        );
    } else {
        return (
            <div data-sb-field-path="author">
                By <span data-sb-field-path=".firstName">{author.firstName}</span>{' '}
                {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
            </div>
        );
    }
}

function postCategories(categories) {
    const categoryCount = categories.length;
    return (
        <div className="mb-6" data-sb-field-path="categories">
            {categories.map((category, index) => {
                if (category.link) {
                    return (
                        <React.Fragment key={index}>
                            <Link href={category.link} data-sb-field-path={`.${index}.title`}>
                                {category.title}
                            </Link>
                            {index < categoryCount - 1 && ', '}
                        </React.Fragment>
                    );
                } else {
                    return (
                        <React.Fragment key={index}>
                            <span data-sb-field-path={`.${index}.title`}>{category.title}</span>
                            {index < categoryCount - 1 && ', '}
                        </React.Fragment>
                    );
                }
            })}
        </div>
    );
}

function postTags(tags) {
    return (
        <footer className="max-w-screen-md mx-auto mt-12" data-sb-field-path="tags">
            {tags.map((tag, index) => {
                if (tag.link) {
                    return (
                        <Link key={index} className="mr-3" href={tag.link} data-sb-field-path={`.${index}.title`}>
                            {tag.title}
                        </Link>
                    );
                } else {
                    return (
                        <span key={index} className="mr-3" data-sb-field-path={`.${index}.title`}>
                            {tag.title}
                        </span>
                    );
                }
            })}
        </footer>
    );
}
