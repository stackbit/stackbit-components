import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Badge from '../Badge';
import Action from '../Action';
import ImageBlock from '../ImageBlock';
import getPageUrlPath from '../../utils/get-page-url-path';
import Link from '../../utils/link';

export default function FeaturedPostsSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const height = props.height || 'tall';
    const topGap = props.topGap || 'medium';
    const bottomGap = props.bottomGap || 'medium';
    const contentWidth = props.contentWidth || 'large';
    const contentAlignHoriz = props.contentAlignHoriz || 'left';
    const contentAlignVert = props.contentAlignVert || 'middle';

    return (
        <div
            id={props.elementId}
            className={classNames(
                'component',
                'component-section',
                'component-featured-posts-section',
                width === 'full' ? colors : '',
                'px-4',
                'sm:px-6',
                'relative',
                {
                    'mt-4 sm:mt-6': topGap === 'small',
                    'mt-6 sm:mt-10': topGap === 'medium',
                    'mt-10 sm:mt-16': topGap === 'large',
                    'mb-4 sm:mb-6': bottomGap === 'small',
                    'mb-6 sm:mb-10': bottomGap === 'medium',
                    'mb-10 sm:mb-16': bottomGap === 'large'
                }
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(
                    width === 'wide' ? colors : '',
                    'flex',
                    'flex-col',
                    'max-w-screen-2xl',
                    'mx-auto',
                    'px-4',
                    'sm:px-8',
                    'md:px-12',
                    'lg:px-16',
                    'py-10',
                    'md:py-20',
                    'relative',
                    {
                        'min-h-2/3-screen': height === 'tall',
                        'min-h-screen': height === 'viewport',
                        'justify-center': contentAlignVert === 'middle',
                        'justify-end': contentAlignVert === 'bottom'
                    }
                )}
            >
                <div
                    className={classNames(
                        'relative',
                        'w-full',
                        {
                            'max-w-3xl': contentWidth === 'small',
                            'max-w-5xl': contentWidth === 'medium',
                            'max-w-7xl': contentWidth === 'large',
                            'mx-auto': contentAlignHoriz === 'center',
                            'ml-auto': contentAlignHoriz === 'right'
                        }
                    )}
                >
                    {featuredPostsHeader(props)}
                    {featuredPostsVariants(props)}
                    {featuredPostsActions(props)}
                </div>
            </div>
        </div>
    );
}

function featuredPostsHeader(props) {
    if (!props.badge && !props.title && !props.subtitle) {
        return null;
    }
    const textAlign = props.textAlign || 'left';
    return (
        <div
            className={classNames({
                'mx-auto text-center': textAlign === 'center',
                'ml-auto text-right': textAlign === 'right'
            })}
        >
            {props.badge && <Badge {...props.badge} className="inline-block inline-block mb-4 text-xs" annotationPrefix=".badge" />}
            {props.title && (
                <h2 className="component-section-title text-3xl tracking-tight sm:text-4xl" data-sb-field-path=".title">
                    {props.title}
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
    const textAlign = props.textAlign || 'left';
    return (
        <div
            className={classNames('flex flex-wrap items-center mt-12 -mx-2', {
                'justify-center': textAlign === 'center',
                'justify-end': textAlign === 'right'
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
