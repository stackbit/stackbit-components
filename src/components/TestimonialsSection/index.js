import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import ImageBlock from '../ImageBlock';

export default function TestimonialsSection(props) {
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
                'component-testimonials-section',
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
                    {testimonialsHeader(props)}
                    {testimonialVariants(props)}
                </div>
            </div>
        </div>
    );
}

function testimonialsHeader(props) {
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
            {props.badge && <Badge {...props.badge} className="inline-block mb-4 text-xs" annotationPrefix=".badge" />}
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

function testimonialVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return testimonialsVariantA(props);
        case 'variant-b':
            return testimonialsVariantB(props);
    }
    return null;
}

function testimonialsVariantA(props) {
    const testimonials = props.testimonials || [];
    if (testimonials.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames({
                'mt-10': props.badge || props.title || props.subtitle
            })}
            data-sb-field-path=".testimonials"
        >
            {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="max-w-5xl mx-auto py-8" data-sb-field-path={`.${index}`}>
                    {testimonial.logo && (
                        <div className="mb-10" data-sb-field-path=".logo">
                            <ImageBlock {...testimonial.logo} className="mx-auto" />
                        </div>
                    )}
                    {testimonial.quote && (
                        <Markdown options={{ forceBlock: true }} className="sb-markdown text-center text-3xl sm:text-4xl" data-sb-field-path=".quote">
                            {testimonial.quote}
                        </Markdown>
                    )}
                    {(testimonial.name || testimonial.title || testimonial.image) && (
                        <footer className="mt-8 text-center text-sm">
                            {testimonial.image && (
                                <div className="sb-avatar mx-auto mb-4 w-24 h-24" data-sb-field-path=".image">
                                    <ImageBlock {...testimonial.image} />
                                </div>
                            )}
                            {testimonial.name && (
                                <strong className="block mb-0.5 text-lg" data-sb-field-path=".name">
                                    {testimonial.name}
                                </strong>
                            )}
                            {testimonial.title && <span data-sb-field-path=".title">{testimonial.title}</span>}
                        </footer>
                    )}
                </blockquote>
            ))}
        </div>
    );
}

function testimonialsVariantB(props) {
    const testimonials = props.testimonials || [];
    if (testimonials.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames({
                'mt-10': props.badge || props.title || props.subtitle
            })}
            data-sb-field-path=".testimonials"
        >
            {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="max-w-5xl mx-auto py-8 sm:flex" data-sb-field-path={`.${index}`}>
                    {testimonial.image && (
                        <div className="mb-8 sm:flex-shrink-0 sm:mb-0 sm:mr-10">
                            <div className="sb-avatar mx-auto w-36 h-36 sm:w-48 sm:h-48" data-sb-field-path=".image">
                                <ImageBlock {...testimonial.image} />
                            </div>
                        </div>
                    )}
                    <div className="sm:flex-grow">
                        {testimonial.quote && (
                            <Markdown options={{ forceBlock: true }} className="sb-markdown text-3xl sm:text-4xl" data-sb-field-path=".quote">
                                {testimonial.quote}
                            </Markdown>
                        )}
                        {(testimonial.name || testimonial.title) && (
                            <footer className="mt-8 text-center text-sm sm:text-left">
                                {testimonial.name && (
                                    <strong className="block mb-0.5 text-lg" data-sb-field-path=".name">
                                        {testimonial.name}
                                    </strong>
                                )}
                                {testimonial.title && <span data-sb-field-path=".title">{testimonial.title}</span>}
                            </footer>
                        )}
                    </div>
                </blockquote>
            ))}
        </div>
    );
}
