import React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import Badge from '../Badge';
import ImageBlock from '../ImageBlock';
import InlineMarkdown from '../InlineMarkdown';

export default function FeaturedPeopleSection(props) {
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
                        {props.subtitle && <p className="md:text-lg" data-sb-field-path=".subtitle">{props.subtitle}</p>}
                    </div>
                )}
                <PeopleVariants {...props} />
            </div>
        </div>
    );
}

function PeopleVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return PeopleVariantA(props);
        case 'variant-b':
            return PeopleVariantB(props);
    }
    return null;
}

function PeopleVariantA(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8', {
                'mt-10': props.badge || props.title || props.subtitle
            })}
            data-sb-field-path=".people"
        >
            {people.map((person, idx) => (
                <article key={idx}>
                    {person.image && (
                        <div className="h-0 w-full pt-1/1 relative" data-sb-field-path=".image">
                            <ImageBlock {...person.image} className="absolute left-0 h-full object-cover top-0 w-full" />
                        </div>
                    )}
                    <div
                        className={classNames('mb-4', {
                            'pt-6': person.image
                        })}
                    >
                        {(person.firstName || person.lastName) && <h2 className="text-xl sm:text-2xl">{person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>} {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}</h2>}
                        {person.role && <p data-sb-field-path=".role">{person.role}</p>}
                    </div>
                </article>
            ))}
        </div>
    );
}

function PeopleVariantB(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid gap-x-8 gap-y-10 lg:grid-cols-2', {
                'mt-12': props.badge || props.title || props.subtitle
            })}
            data-sb-field-path=".people"
        >
            {people.map((person, idx) => (
                <article key={idx} className="sm:flex">
                    {person.image && (
                        <div className="w-full sm:flex-shrink-0 sm:h-full sm:w-1/3">
                            <div className="block h-0 w-full pt-1/1 relative" data-sb-field-path=".image">
                                <ImageBlock {...person.image} className="absolute left-0 h-full object-cover top-0 w-full" />
                            </div>
                        </div>
                    )}
                    <div
                        className={classNames('mb-4 sm:flex-grow', {
                            'pt-6 sm:pt-0 sm:pl-6': person.image
                        })}
                    >
                        {(person.firstName || person.lastName) && <h2 className="text-xl sm:text-2xl">{person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>} {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}</h2>}
                        {person.role && <p data-sb-field-path=".role">{person.role}</p>}
                        {person.bio && (
                            <Markdown
                                options={{ forceBlock: true }}
                                className={classNames({
                                    'mt-4': person.firstName || person.lastName || person.role
                                })}
                                data-sb-field-path=".bio"
                            >
                                {person.bio}
                            </Markdown>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}
