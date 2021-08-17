import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Link from 'next/link';
import Badge from '../Badge';
import InlineMarkdown from '../InlineMarkdown';

export default function PostsSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames(colors, 'py-16 lg:py-20', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport'
            })}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow'
                })}
            >
                {(props.badge || props.title || props.subtitle) && (
                    <div
                        className={classNames('max-w-lg', {
                            'mx-auto text-center': alignHoriz === 'center',
                            'ml-auto text-right': alignHoriz === 'right'
                        })}
                    >
                        {props.badge && <Badge label={props.badge} className="inline-block mb-4 text-xs" />}
                        {props.title && (
                            <h2 className="text-3xl tracking-tight sm:text-4xl">
                                <InlineMarkdown>{props.title}</InlineMarkdown>
                            </h2>
                        )}
                        {props.subtitle && <p className="md:text-lg">{props.subtitle}</p>}
                    </div>
                )}
                <PostVariants {...props} />
            </div>
        </div>
    );
}

function PostVariants({ postVariant, ...props }) {
    postVariant = postVariant || 'variant-a';
    switch (postVariant) {
        case 'variant-a':
            return PostsVariantA(props);
        case 'variant-b':
            return PostsVariantB(props);
    }
    return null;
}

function PostsVariantA(props) {
    const posts = props.posts || [];
    console.log(posts);
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid gap-6 md:grid-cols-3 lg:gap-8', {
                'mt-10': props.badge || props.title || props.subtitle
            })}
        >
            {posts.map((post, idx) => (
                <Link key={idx} href={post.url}>
                    <a className="sb-card block">
                        <article>
                            {post.thumbImageUrl && (
                                <div className="h-0 w-full pt-1/2 relative">
                                    <img src={post.thumbImageUrl} alt={post.thumbImageAltText} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </div>
                            )}
                            <div className="px-4 py-6 sm:px-6 sm:pb-10">
                                <h2 className="text-xl sm:text-2xl mb-3">{post.title}</h2>
                                {post.excerpt && <Markdown>{post.excerpt}</Markdown>}
                            </div>
                        </article>
                    </a>
                </Link>
            ))}
        </div>
    );
}

function PostsVariantB(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid gap-x-8 gap-y-10 lg:grid-cols-2', {
                'mt-12': props.badge || props.title || props.subtitle
            })}
        >
            {posts.map((post, idx) => (
                <article key={idx} className="sb-card sm:flex">
                    {post.thumbImageUrl && (
                        <div className="w-full sm:flex-shrink-0 sm:h-full sm:w-1/3">
                            <Link href={post.url}>
                                <a className="block h-0 w-full pt-1/2 relative sm:h-40 sm:min-h-full sm:pt-0">
                                    <img src={post.thumbImageUrl} alt={post.thumbImageAltText} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </a>
                            </Link>
                        </div>
                    )}
                    <div className="px-4 py-6 sm:px-6 sm:pb-10 sm:flex-grow">
                        <h2 className="mb-2 text-2xl md:text-xl">
                            <Link href={post.url}>
                                <a>{post.title}</a>
                            </Link>
                        </h2>
                        {post.excerpt && <Markdown>{post.excerpt}</Markdown>}
                    </div>
                </article>
            ))}
        </div>
    );
}
