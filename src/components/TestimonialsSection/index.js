import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import ImageBlock from '../ImageBlock';
import InlineMarkdown from '../InlineMarkdown';

export default function TestimonialsSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const height = props.height || 'auto';
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames(colors, 'py-8 lg:py-12', {
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
                        {props.badge && <Badge label={props.badge} className="sb-badge inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
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
                )}
                <TestimonialVariants {...props} />
            </div>
        </div>
    );
}

function TestimonialVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return TestimonialsVariantA(props);
        case 'variant-b':
            return TestimonialsVariantB(props);
    }
    return null;
}

function TestimonialsVariantA(props) {
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
                        <Markdown options={{ forceBlock: true }} className="text-center text-3xl sm:text-4xl" data-sb-field-path=".quote">
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

function TestimonialsVariantB(props) {
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
                            <Markdown options={{ forceBlock: true }} className="text-3xl sm:text-4xl" data-sb-field-path=".quote">
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
