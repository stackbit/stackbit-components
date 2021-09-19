import React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Badge from '../Badge';
import Action from '../Action';
import ImageBlock from '../ImageBlock';
import InlineMarkdown from '../InlineMarkdown';
import getPageUrlPath from '../../utils/get-page-url-path';
import Link from '../../utils/link';

export default function FeaturedPostsSection(props) {
    const width = props.width || 'wide';
    switch (width) {
        case 'wide':
            return featuredPostsSectionWide(props);
        case 'full':
            return featuredPostsSectionFull(props);
    }
    return null;
}

function featuredPostsSectionWide(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    return (
        <div
            id={props.elementId}
            className="component component-section component-featured-posts-section px-4 sm:px-6"
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(colors, 'max-w-screen-xl', 'mx-auto', 'px-4', 'sm:px-6', height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20', {
                    'min-h-screen flex flex-col justify-center': height === 'viewport',
                    'mt-10': topGap === 'small',
                    'mt-20': topGap === 'large',
                    'mb-10': bottomGap === 'small',
                    'mb-20': bottomGap === 'large'
                })}
            >
                <div
                    className={classNames('mx-auto', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', {
                        'w-full': height === 'viewport'
                    })}
                >
                    {featuredPostsHeader(props)}
                    {featuredPostsVariants(props)}
                    {featuredPostsActions(props)}
                </div>
            </div>
        </div>
    );
}

function featuredPostsSectionFull(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    return (
        <div
            id={props.elementId}
            className={classNames(
                'component',
                'component-section',
                'component-featured-posts-section',
                colors,
                'px-4',
                'relative',
                'sm:px-6',
                height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20',
                {
                    'min-h-screen flex flex-col justify-center': height === 'viewport',
                    'mt-10': topGap === 'small',
                    'mt-20': topGap === 'large',
                    'mb-10': bottomGap === 'small',
                    'mb-20': bottomGap === 'large'
                }
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', 'xl:max-w-screen-xl', {
                    'w-full': height === 'viewport'
                })}
            >
                {featuredPostsHeader(props)}
                {featuredPostsVariants(props)}
                {featuredPostsActions(props)}
            </div>
        </div>
    );
}

function featuredPostsHeader(props) {
    if (!props.badge && !props.title && !props.subtitle) {
        return null;
    }
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames({
                'mx-auto text-center': alignHoriz === 'center',
                'ml-auto text-right': alignHoriz === 'right'
            })}
        >
            {props.badge && <Badge {...props.badge} className="inline-block inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
            {props.title && (
                <h2 className="text-3xl tracking-tight sm:text-4xl" data-sb-field-path=".title">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h2>
            )}
            {props.subtitle && (
                <p className="md:text-lg" data-sb-field-path=".subtitle">
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
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames('flex flex-wrap items-center mt-12 -mx-2', {
                'justify-center': alignHoriz === 'center',
                'justify-end': alignHoriz === 'right'
            })}
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
            className={classNames('grid gap-6 md:grid-cols-3 lg:gap-8', {
                'mt-10': props.badge || props.title || props.subtitle
            })}
            data-sb-field-path=".posts"
        >
            {posts.map((post, index) => {
                const dateTimeAttr = dayjs(post.date).format('YYYY-MM-DD HH:mm:ss');
                const formattedDate = dayjs(post.date).format('MMMM D, YYYY');
                return (
                    <Link key={index} href={getPageUrlPath(post)} className="sb-card block" data-sb-object-id={post.__metadata.id}>
                        <article>
                            {post.thumbImage && (
                                <div className="h-0 w-full pt-1/2 relative" data-sb-field-path="thumbImage">
                                    <ImageBlock {...post.thumbImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </div>
                            )}
                            <div className="px-4 py-6 sm:px-6 sm:pb-10">
                                <h2 className="text-xl sm:text-2xl mb-1" data-sb-field-path="title">
                                    {post.title}
                                </h2>
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
            className={classNames('grid gap-x-8 gap-y-10 lg:grid-cols-2', {
                'mt-12': props.badge || props.title || props.subtitle
            })}
            data-sb-field-path=".posts"
        >
            {posts.map((post, index) => {
                const dateTimeAttr = dayjs(post.date).format('YYYY-MM-DD HH:mm:ss');
                const formattedDate = dayjs(post.date).format('MMMM D, YYYY');
                return (
                    <article key={index} className="sb-card sm:flex" data-sb-object-id={post.__metadata.id}>
                        {post.thumbImage && (
                            <div className="w-full sm:flex-shrink-0 sm:h-full sm:w-1/3">
                                <Link
                                    href={getPageUrlPath(post)}
                                    className="block h-0 w-full pt-1/2 relative sm:h-40 sm:min-h-full sm:pt-0"
                                    data-sb-field-path="thumbImage"
                                >
                                    <ImageBlock {...post.thumbImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </Link>
                            </div>
                        )}
                        <div className="px-4 py-6 sm:px-6 sm:pb-10 sm:flex-grow">
                            <h2 className="mb-1 text-2xl md:text-xl">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h2>
                            <div className="text-sm mb-3">
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
