import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import getPageUrlPath from '../../utils/get-page-url-path';
import ImageBlock from '../ImageBlock';
import Link from '../../utils/link';

export default function FeaturedPostsSection(props) {
    const colors = props.colors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';
    const sectionStyles = props.styles?.self || {};

    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                backgroundWidth === 'inset' ? 'sb-component-section-inset' : '',
                'sb-component-feat-posts-section',
                colors,
                'px-4',
                'sm:px-8'
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'max-w-screen-xl',
                    'mx-auto',
                    'py-5',
                    'sm:py-11',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : '',
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : '',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : ''
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : '')}>
                    {featuredPostsHeader(props)}
                    {featuredPostsVariants(props)}
                    {featuredPostsActions(props)}
                </div>
            </div>
        </div>
    );
}

function featuredPostsHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 className={classNames('text-3xl', 'sm:text-4xl', styles.title ? mapStyles(styles.title) : '')} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : '')} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
        </div>
    );
}

function featuredPostsActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex', 'flex-wrap', 'items-center', 'mt-8', '-mx-2', styles.actions ? mapStyles(styles.actions) : '')}
            data-sb-field-path=".actions"
        >
            {props.actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function featuredPostsVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return postsVariantA(props);
        case 'variant-b':
            return postsVariantB(props);
        case 'variant-c':
            return postsVariantC(props);
    }
    return null;
}

function postsVariantA(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-6', 'md:grid-cols-3', 'lg:gap-8', {
                'mt-10': props.title || props.subtitle
            })}
            data-sb-field-path=".posts"
        >
            {posts.map((post, index) => {
                const dateTimeAttr = dayjs(post.date).format('YYYY-MM-DD HH:mm:ss');
                const formattedDate = dayjs(post.date).format('MMMM D, YYYY');
                return (
                    <Link key={index} href={getPageUrlPath(post)} className="sb-card block" data-sb-object-id={post.__metadata.id}>
                        <article>
                            {post.featuredImage && (
                                <div className="h-0 w-full pt-1/2 relative" data-sb-field-path="featuredImage">
                                    <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </div>
                            )}
                            <div className="px-4 py-6 sm:px-6 sm:pb-10">
                                {props.title ? (
                                    <h3 className="text-xl sm:text-2xl mb-1">
                                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                            {post.title}
                                        </Link>
                                    </h3>
                                ) : (
                                    <h2 className="text-xl sm:text-2xl mb-1">
                                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                            {post.title}
                                        </Link>
                                    </h2>
                                )}
                                <div className="text-sm mb-3">
                                    <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                        {formattedDate}
                                    </time>
                                </div>
                                {post.excerpt && <p data-sb-field-path="excerpt">{post.excerpt}</p>}
                            </div>
                        </article>
                    </Link>
                );
            })}
        </div>
    );
}

function postsVariantB(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-6', 'md:grid-cols-2', 'lg:gap-8', {
                'mt-10': props.title || props.subtitle
            })}
            data-sb-field-path=".posts"
        >
            {posts.map((post, index) => {
                const dateTimeAttr = dayjs(post.date).format('YYYY-MM-DD HH:mm:ss');
                const formattedDate = dayjs(post.date).format('MMMM D, YYYY');
                return (
                    <Link key={index} href={getPageUrlPath(post)} className="sb-card block" data-sb-object-id={post.__metadata.id}>
                        <article>
                            {post.featuredImage && (
                                <div className="h-0 w-full pt-1/2 relative" data-sb-field-path="featuredImage">
                                    <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </div>
                            )}
                            <div className="px-4 py-6 sm:px-6 sm:pb-10">
                                {props.title ? (
                                    <h3 className="text-xl sm:text-2xl mb-1">
                                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                            {post.title}
                                        </Link>
                                    </h3>
                                ) : (
                                    <h2 className="text-xl sm:text-2xl mb-1">
                                        <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                            {post.title}
                                        </Link>
                                    </h2>
                                )}
                                <div className="text-sm mb-3">
                                    <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                        {formattedDate}
                                    </time>
                                </div>
                                {post.excerpt && <p data-sb-field-path="excerpt">{post.excerpt}</p>}
                            </div>
                        </article>
                    </Link>
                );
            })}
        </div>
    );
}

function postsVariantC(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    return (
        <div className={classNames(props.title || props.subtitle ? 'mt-12' : '')} data-sb-field-path=".posts">
            {posts.map((post, index) => {
                const dateTimeAttr = dayjs(post.date).format('YYYY-MM-DD HH:mm:ss');
                const formattedDate = dayjs(post.date).format('MMMM D, YYYY');
                return (
                    <article key={index} className="sb-card mb-8 sm:flex" data-sb-object-id={post.__metadata.id}>
                        {post.featuredImage && (
                            <div className="sm:w-1/3">
                                <Link
                                    href={getPageUrlPath(post)}
                                    className="block h-0 w-full pt-1/2 relative sm:h-60 sm:min-h-full sm:pt-0"
                                    data-sb-field-path="featuredImage"
                                >
                                    <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </Link>
                            </div>
                        )}
                        <div className="px-4 pt-6 pb-8 sm:px-6 sm:pt-10 pb-12 sm:w-2/3">
                            {props.title ? (
                                <h3 className="mb-1 text-2xl sm:text-3xl">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                            ) : (
                                <h2 className="mb-1 text-2xl sm:text-3xl">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h2>
                            )}
                            <div className="mb-4">
                                <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                    {formattedDate}
                                </time>
                            </div>
                            {post.excerpt && <p data-sb-field-path="excerpt">{post.excerpt}</p>}
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-sm';
        case 'wide':
            return 'max-w-screen-lg';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
