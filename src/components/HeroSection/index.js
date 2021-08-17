import { getDynamicComponent } from '../../components-registry';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import Button from '../Button';
import Link from '../Link';
import InlineMarkdown from '../InlineMarkdown';

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
                'text-center': alignHoriz === 'center',
                'text-right': alignHoriz === 'right'
            })}
            data-sb-field-path={props.annotationPrefix}
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

function HeroVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return HeroFeatureRight(props);
        case 'variant-b':
            return HeroFeatureLeft(props);
        case 'variant-c':
            return HeroFeatureTop(props);
        case 'variant-d':
            return HeroFeatureBottom(props);
    }
    return null;
}

function HeroFeatureRight(props) {
    return (
        <div
            className={classNames('grid gap-8 lg:items-center', {
                'lg:grid-cols-2': props.feature
            })}
        >
            <div className="max-w-3xl mx-auto">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
            {props.feature && (
                <div data-sb-field-path=".feature">
                    {HeroFeature(props.feature)}
                </div>
            )}
        </div>
    );
}

function HeroFeatureLeft(props) {
    return (
        <div
            className={classNames('grid gap-8 lg:items-center', {
                'lg:grid-cols-2': props.feature
            })}
        >
            {props.feature && (
                <div data-sb-field-path=".feature">
                    {HeroFeature(props.feature)}
                </div>
            )}
            <div className="max-w-3xl mx-auto">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
        </div>
    );
}

function HeroFeatureTop(props) {
    return (
        <>
            {props.feature && (
                <div className="mb-8 lg:mb-12" data-sb-field-path=".feature">
                    {HeroFeature(props.feature)}
                </div>
            )}
            <div className="max-w-3xl mx-auto">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
        </>
    );
}

function HeroFeatureBottom(props) {
    return (
        <>
            <div className="max-w-3xl mx-auto">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
            {props.feature && (
                <div className="mt-8 lg:mt-12" data-sb-field-path=".feature">
                    {HeroFeature(props.feature)}
                </div>
            )}
        </>
    );
}

function HeroFeature(feature) {
    const featureType = feature.type;
    if (!featureType) {
        throw new Error(`hero section feature does not have the 'type' property`);
    }
    const Feature = getDynamicComponent(featureType);
    if (!Feature) {
        throw new Error(`no component matching the hero section feature type: ${featureType}`);
    }
    return <Feature {...feature} className="mx-auto" />;
}

function HeroContent(props) {
    return (
        <>
            {props.badge && <Badge label={props.badge} className="sb-badge inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
            {props.title && (
                <h2 className="text-4xl tracking-tight sm:text-5xl mb-6" data-sb-field-path=".title">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h2>
            )}
            {props.text && <Markdown className="md:text-lg" data-sb-field-path=".text">{props.text}</Markdown>}
        </>
    );
}

function HeroActions(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('flex flex-wrap items-center -mx-2', {
                'mt-8': props.badge || props.title || props.text,
                'justify-center': alignHoriz === 'center',
                'justify-end': alignHoriz === 'right'
            })}
            data-sb-field-path=".actions"
        >
            {props.actions.map((action, idx) =>
                (action.type === 'primary-button' || action.type === 'secondary-button') ? (
                    <Button
                        key={idx}
                        {...action}
                        className="mb-3 mx-2 lg:whitespace-nowrap"
                        annotationPrefix={`.${idx}`}
                    />
                ) : (
                    <Link
                        key={idx}
                        {...action}
                        className="mb-3 mx-2 lg:whitespace-nowrap"
                        annotationPrefix={`.${idx}`}
                    />
                )
            )}
        </div>
    );
}
