import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import getPageUrlPath from '../../utils/get-page-url-path';
import Link from '../../utils/link';

export default function FeaturedPostsSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (
        <div
            id={cssId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-featured-posts-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                sectionStyles.margin,
                sectionStyles.padding,
                sectionStyles.borderColor,
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : null
            )}
            style={{
                borderWidth: `${sectionBorderWidth}px`
            }}
        >
            <div className={classNames('flex', 'w-full', sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null)}>
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
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
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null)} data-sb-field-path=".subtitle">
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
            className={classNames('flex', 'flex-wrap', 'items-center', 'mt-12', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
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
        case 'variant-d':
            return postsVariantD(props);
    }
    return null;
}

function postsVariantA(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8" data-sb-field-path=".posts">
            {posts.map((post, index) => (
                <article key={index} className="sb-card" data-sb-object-id={post.__metadata?.id}>
                    {post.featuredImage && (
                        <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImage">
                            <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                        </Link>
                    )}
                    <div className="px-4 py-6 sm:px-6 sm:pb-10">
                        {props.showDate && postDate(post.date)}
                        <h3>
                            <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                {post.title}
                            </Link>
                        </h3>
                        {props.showAuthor && post.author && postAuthor(post.author)}
                        {post.excerpt && (
                            <p className="mt-3" data-sb-field-path="excerpt">
                                {post.excerpt}
                            </p>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

function postsVariantB(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8" data-sb-field-path=".posts">
            {posts.map((post, index) => (
                <article
                    key={index}
                    className={classNames('sb-card', {
                        'md:col-span-2': index % 4 === 0 || (index + 1) % 4 === 0
                    })}
                    data-sb-object-id={post.__metadata?.id}
                >
                    {post.featuredImage && (
                        <Link
                            href={getPageUrlPath(post)}
                            className="block h-0 w-full pt-9/16 relative md:pt-0 md:h-60 lg:h-72"
                            data-sb-field-path="featuredImage"
                        >
                            <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                        </Link>
                    )}
                    <div className="px-4 py-6 sm:px-6 sm:pb-10">
                        {props.showDate && postDate(post.date)}
                        <h3>
                            <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                {post.title}
                            </Link>
                        </h3>
                        {props.showAuthor && post.author && postAuthor(post.author)}
                        {post.excerpt && (
                            <p className="mt-3" data-sb-field-path="excerpt">
                                {post.excerpt}
                            </p>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

function postsVariantC(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8" data-sb-field-path=".posts">
            {posts.map((post, index) => {
                const isFullWidth = index % 4 === 0;
                return (
                    <article
                        key={index}
                        className={classNames('sb-card', {
                            'md:col-span-3 md:flex': isFullWidth
                        })}
                        data-sb-object-id={post.__metadata.id}
                    >
                        {post.featuredImage && (
                            <div
                                className={classNames({
                                    'md:w-2/5': isFullWidth
                                })}
                            >
                                <Link
                                    href={getPageUrlPath(post)}
                                    className={classNames('block', 'h-0', 'w-full', 'pt-9/16', 'relative', {
                                        'md:h-60 md:min-h-full md:pt-0 lg:h-72': isFullWidth
                                    })}
                                    data-sb-field-path="featuredImage"
                                >
                                    <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </Link>
                            </div>
                        )}
                        <div
                            className={classNames('px-4 pt-6 pb-8 sm:px-6', {
                                'md:w-3/5 md:pt-8 md:pb-10': isFullWidth
                            })}
                        >
                            {props.showDate && postDate(post.date)}
                            <h3>
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h3>
                            {props.showAuthor && post.author && postAuthor(post.author)}
                            {post.excerpt && (
                                <p className="mt-3" data-sb-field-path="excerpt">
                                    {post.excerpt}
                                </p>
                            )}
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

function postsVariantD(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div data-sb-field-path=".posts">
            {posts.map((post, index) => (
                <article key={index} className="sb-card mb-8 md:flex" data-sb-object-id={post.__metadata.id}>
                    {post.featuredImage && (
                        <div className="md:w-2/5">
                            <Link
                                href={getPageUrlPath(post)}
                                className="block h-0 w-full pt-9/16 relative md:h-60 md:min-h-full md:pt-0 lg:h-72"
                                data-sb-field-path="featuredImage"
                            >
                                <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                            </Link>
                        </div>
                    )}
                    <div className="px-4 pt-6 pb-8 sm:px-6 md:w-3/5 md:pt-8 md:pb-10">
                        {props.showDate && postDate(post.date)}
                        <h3>
                            <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                {post.title}
                            </Link>
                        </h3>
                        {props.showAuthor && post.author && postAuthor(post.author)}
                        {post.excerpt && (
                            <p className="mt-3" data-sb-field-path="excerpt">
                                {post.excerpt}
                            </p>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

function postDate(date) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MMMM D, YYYY');
    return (
        <div className="text-sm mb-1">
            <time dateTime={dateTimeAttr} data-sb-field-path="date">
                {formattedDate}
            </time>
        </div>
    );
}

function postAuthor(author) {
    return (
        <div className="text-sm mt-1">
            By{' '}
            <span data-sb-field-path="author">
                {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
                {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
            </span>
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
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
