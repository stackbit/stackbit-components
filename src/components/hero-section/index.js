import ReactMarkdown from 'react-markdown';
import Badge from '../badge';
import Button from '../button';
import Link from '../link';
import classNames from 'classnames';

export default function HeroSection({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return HeroImageHorizontal(props);
        case 'variant-b':
            return HeroImageVertical(props);
        case 'variant-c':
            return HeroVideo(props);
        case 'variant-d':
            return HeroImage(props);
    }
    return null;
}

function HeroImageHorizontal(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
    const mediaPosition = props.mediaPosition || 'left';

    return (
        <div
            className={classNames('overflow-x-hidden relative', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col': height === 'viewport',
                'bg-base-50 text-base-900': style === 'style-a',
                'bg-neutral text-base-50': style === 'style-b',
                'bg-neutral text-primary': style === 'style-c',
                'bg-primary text-base-900': style === 'style-d',
                'bg-secondary text-base-900': style === 'style-e'
            })}
        >
            <div
                className={classNames('mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg', {
                    'xl:max-w-screen-xl': width !== 'narrow',
                    'flex flex-col flex-grow w-full': height === 'viewport'
                })}
            >
                <div
                    className={classNames('flex flex-wrap', {
                        'flex-grow': height === 'viewport',
                        'lg:justify-end': mediaPosition === 'left'
                    })}
                >
                    <div
                        className={classNames('py-16 px-4 w-full lg:self-center lg:w-1/2 lg:py-20', {
                            'lg:order-last lg:pr-8': mediaPosition === 'left',
                            'lg:pl-8': mediaPosition === 'right'
                        })}
                    >
                        {HeroContent(props)}
                        {HeroActions(props)}
                    </div>
                    <div
                        className={classNames('w-full lg:inset-y-0 lg:w-1/2 lg:max-w-full lg:absolute', {
                            'left-0 lg:pr-4': mediaPosition === 'left',
                            'right-0 lg:pl-4': mediaPosition === 'right'
                        })}
                    >
                        <img
                            src={props.imageUrl}
                            className="w-screen max-w-none ml-1/2 transform -translate-x-1/2 object-cover lg:h-full lg:ml-0 lg:transform-none lg:w-full lg:max-w-full"
                            alt={props.imageAlt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeroImageVertical(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
    const mediaPosition = props.mediaPosition || 'left';

    return (
        <div
            className={classNames({
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col': height === 'viewport',
                'bg-base-50 text-base-900': style === 'style-a',
                'bg-neutral text-base-50': style === 'style-b',
                'bg-neutral text-primary': style === 'style-c',
                'bg-primary text-base-900': style === 'style-d',
                'bg-secondary text-base-900': style === 'style-e'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow',
                    'flex flex-col flex-grow': height === 'viewport'
                })}
            >
                <div
                    className={classNames('flex flex-wrap -mx-4', {
                        'flex-grow': height === 'viewport'
                    })}
                >
                    <div
                        className={classNames('py-16 px-4 w-full lg:self-center lg:w-1/2 lg:py-20', {
                            'lg:order-last': mediaPosition === 'left'
                        })}
                    >
                        {HeroContent(props)}
                        {HeroActions(props)}
                    </div>
                    <div className="px-4 w-full lg:w-1/2">
                        <img src={props.imageUrl} alt={props.imageAlt} className="w-full h-full mx-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeroVideo(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
    const mediaPosition = props.mediaPosition || 'left';

    return (
        <div
            className={classNames('py-16 lg:py-20', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'bg-base-50 text-base-900': style === 'style-a',
                'bg-neutral text-base-50': style === 'style-b',
                'bg-neutral text-primary': style === 'style-c',
                'bg-primary text-base-900': style === 'style-d',
                'bg-secondary text-base-900': style === 'style-e'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow'
                })}
            >
                <div className="grid gap-8 lg:grid-cols-2">
                    <div
                        className={classNames('flex flex-col justify-center', {
                            'lg:order-last': mediaPosition === 'left'
                        })}
                    >
                        {HeroContent(props)}
                        {HeroActions(props)}
                    </div>
                    <div>
                        <div className="relative">
                            <video className="product-hero-media product-hero-media-secondary" autoPlay loop muted playsInline poster={props.imageUrl}>
                                <source src={props.videoUrl} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeroImage(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
    const mediaPosition = props.mediaPosition || 'left';

    return (
        <div
            className={classNames('py-16 lg:py-20', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'bg-base-50 text-base-900': style === 'style-a',
                'bg-neutral text-base-50': style === 'style-b',
                'bg-neutral text-primary': style === 'style-c',
                'bg-primary text-base-900': style === 'style-d',
                'bg-secondary text-base-900': style === 'style-e'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow'
                })}
            >
                <div className="grid gap-8 lg:grid-cols-2">
                    <div
                        className={classNames('flex flex-col justify-center', {
                            'lg:order-last': mediaPosition === 'left'
                        })}
                    >
                        {HeroContent(props)}
                        {HeroActions(props)}
                    </div>
                    <div className="relative">
                        <img src={props.imageUrl} alt={props.imageAlt} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeroContent(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames('max-w-2xl mb-6', {
                'mx-auto text-center': alignHoriz === 'center'
            })}
        >
            {props.badge && <Badge label={props.badge} className="bg-accent text-base-900" />}
            {props.title && (
                <h1 className="font-medium font-sans text-3xl tracking-tight sm:text-4xl mb-6">
                    <ReactMarkdown allowedElements={['br', 'span', 'strong']} unwrapDisallowed={true} components={components}>
                        {props.title}
                    </ReactMarkdown>
                </h1>
            )}
            {props.description && <ReactMarkdown className="md:text-lg">{props.description}</ReactMarkdown>}
        </div>
    );
}

function HeroActions(props) {
    const style = props.style || 'style-a';
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames('flex flex-col items-center md:flex-row', {
                'justify-center': alignHoriz === 'center'
            })}
        >
            {props.actions.map((action, idx) =>
                action.type === 'button' ? (
                    <Button
                        key={idx}
                        {...action}
                        className={classNames(
                            'w-full mb-3 md:w-auto md:mb-0',
                            alignHoriz === 'left' ? 'md:mr-4' : 'md:mx-2',
                            style === 'style-a' ? 'bg-primary text-base-900' : 'bg-neutral-variant text-base-50'
                        )}
                    />
                ) : (
                    <Link key={idx} {...action} className={classNames(alignHoriz === 'left' ? 'md:mr-4' : 'md:mx-2')} />
                )
            )}
        </div>
    );
}

const components = {
    strong({ children }) {
        return <span className="inline-block text-accent">{children}</span>;
    }
};
