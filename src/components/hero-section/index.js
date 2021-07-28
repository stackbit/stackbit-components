import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import Badge from '../badge';
import Button from '../button';
import ImageBlock from '../image-block';
import Link from '../link';
import VideoBlock from '../video-block';

export default function HeroSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const height = props.height || 'auto';
    const alignHoriz = props.alignHoriz || 'left';

    return (
        <div
            className={classNames(colors, 'py-16 lg:py-20', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'text-center': alignHoriz === 'center'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow',
                    'w-full': height === 'viewport'
                })}
            >
                <HeroVariants {...props} />
            </div>
        </div>
    );
}

function HeroVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return HeroFeatureRight(props);
        case 'variant-b':
            return HeroFeatureLeft(props);
        case 'variant-c':
            return HeroFeatureTop(props);
        case 'variant-d':
            return HeroFeatureBottom(props);
        case 'variant-e':
            return HeroNoFeature(props);
    }
    return null;
}

function HeroFeatureRight(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
            <div>
                {HeroFeature(props.feature, alignHoriz)}
            </div>
        </div>
    );
}

function HeroFeatureLeft(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
                {HeroFeature(props.feature, alignHoriz)}
            </div>
            <div>
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
        </div>
    );
}

function HeroFeatureTop(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <>
            <div className="mb-8 lg:mb-12">
                {HeroFeature(props.feature, alignHoriz)}
            </div>
            {HeroContent(props)}
            {HeroActions(props)}
        </>
    );
}

function HeroFeatureBottom(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <>
            {HeroContent(props)}
            {HeroActions(props)}
            <div className="mt-8 lg:mt-12">
                {HeroFeature(props.feature, alignHoriz)}
            </div>
        </>
    );
}

function HeroNoFeature(props) {
    return (
        <>
            {HeroContent(props)}
            {HeroActions(props)}
        </>
    );
}

function HeroFeature(feature, alignHoriz) {
    if (!feature) {
        return null;
    }
    switch (feature.type) {
        case 'image_block':
            return <ImageBlock {...feature} className={classNames({ 'mx-auto': alignHoriz === 'center' })} />;
        case 'video_block':
            return <VideoBlock {...feature} />;
    }
    return null;
}

function HeroContent(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <>
            {props.badge && <Badge label={props.badge} />}
            {props.title && (
                <h1 className="font-medium font-sans text-4xl tracking-tight sm:text-5xl mb-6">
                    <ReactMarkdown allowedElements={['br', 'span', 'strong']} unwrapDisallowed={true} components={components}>
                        {props.title}
                    </ReactMarkdown>
                </h1>
            )}
            {props.text && <ReactMarkdown className={classNames('max-w-2xl md:text-lg', {
                'mx-auto': alignHoriz === 'center'
            })}>{props.text}</ReactMarkdown>}
        </>
    );
}

function HeroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames('flex flex-wrap items-center', {
                'justify-center': alignHoriz === 'center',
                'mt-8': props.badge || props.title || props.text
            })}
        >
            {props.actions.map((action, idx) =>
                action.type === 'button' ? (
                    <Button
                        key={idx}
                        {...action}
                        className={classNames(
                            'sb-btn',
                            'mb-3',
                            alignHoriz === 'left' ? 'mr-4' : 'mx-2'
                        )}
                    />
                ) : (
                    <Link key={idx} {...action} className={classNames('mb-3', alignHoriz === 'left' ? 'mr-4' : 'mx-2')} />
                )
            )}
        </div>
    );
}

const components = {
    strong({ children }) {
        return <span className="sb-highlight inline-block">{children}</span>;
    }
};
