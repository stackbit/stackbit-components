import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function PostsSection(props) {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                {props.badge && <Badge label={props.badge} />}
                {props.title && <h2 className="header-2">{props.title}</h2>}
                {props.subtitle && <p className="text-base text-light md:text-lg">{props.subtitle}</p>}
            </div>
            <PostVariants {...props} />
        </div>
    );
}

function PostVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return PostsVariantA(props);
        case 'variant-b':
            return PostsVariantB(props);
    }
    return null;
}

function PostsVariantA(props) {
    return (
        <div className="grid gap-6 md:grid-cols-3 lg:gap-10">
            {(props.posts || []).map((post, idx) => (
                <Link key={idx} href={post.url}>
                    <a className="block shadow-xl transition duration-300 hover:-translate-y-1">
                        <article>
                            {post.thumb_image && (
                                <div className="h-0 w-full pt-1/2 relative">
                                    <img src={post.thumb_image} alt={post.thumb_image_alt} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </div>
                                
                            )}
                            <div className="px-4 py-6 sm:px-6 sm:pb-10">
                                <h2 className="text-xl sm:text-2xl mb-3">{post.title}</h2>
                                {post.excerpt && (<ReactMarkdown>{post.excerpt}</ReactMarkdown>)}
                            </div>
                        </article>
                    </a>
                </Link>
            ))}
        </div>
    );
}

function PostsVariantB(props) {
    return (
        <div className="flex flex-wrap -mx-4">
            {(props.posts || []).map((post, idx) => (
                <article key={idx} className="flex flex-wrap mb-10 px-4 w-full md:w-1/2">
                    {post.thumb_image && (
                        <div className="mb-4 w-full md:mb-0 md:w-1/3">
                            <Link href={post.url}>
                                <a className="block group overflow-hidden pt-1/1 relative w-full">
                                    <img src={post.thumb_image} alt={post.thumb_image_alt} className="absolute left-0 top-0 h-full w-full object-cover scale-100 transition duration-300 group-hover:scale-105" />
                                </a>
                            </Link>
                        </div>
                    )}
                    <div className="w-full md:pl-6 md:w-2/3 lg:pt-2">
                        <h2 className="mb-2 text-2xl md:text-xl">
                            <Link href={post.url}>
                                <a>{post.title}</a>
                            </Link>
                        </h2>
                        {post.excerpt && (<ReactMarkdown>{post.excerpt}</ReactMarkdown>)}
                    </div>
                </article>
            ))}
        </div>
    );
}
