import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import getPageUrlPath from '../../utils/get-page-url-path';
import Link from '../../utils/link';

export default function PostFeedSection(props) {
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-latest-posts-section',
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
            data-sb-field-path={props.annotationPrefix}
        >
            <div className={classNames('flex', 'w-full', sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null)}>
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    {postFeedHeader(props)}
                    {postFeedVariants(props)}
                    {postFeedActions(props)}
                </div>
            </div>
        </div>
    );
}

function postFeedHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 className={classNames('text-3xl', 'sm:text-4xl', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
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

function postFeedActions(props) {
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

function postFeedVariants(props) {
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
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {posts.map((post, index) => {
                const dateTimeAttr = dayjs(post.date).format('YYYY-MM-DD HH:mm:ss');
                const formattedDate = dayjs(post.date).format('MMMM D, YYYY');
                return (
                    <article key={index} className="sb-card" data-sb-object-id={post.__metadata.id}>
                        {post.featuredImage && (
                            <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImage">
                                <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                            </Link>
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
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div>
            {posts.map((post, index) => {
                const dateTimeAttr = dayjs(post.date).format('YYYY-MM-DD HH:mm:ss');
                const formattedDate = dayjs(post.date).format('MMMM D, YYYY');
                return (
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
                            {props.title ? (
                                <h3 className="text-xl sm:text-2xl md:text-3xl mb-1">
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                            ) : (
                                <h2 className="text-xl sm:text-2xl md:text-3xl mb-1">
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
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
