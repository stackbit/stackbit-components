import React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import Badge from '../Badge';
import Action from '../Action';
import ImageBlock from '../ImageBlock';
import InlineMarkdown from '../InlineMarkdown';

export default function FeaturedPeopleSection(props) {
    const width = props.width || 'wide';
    switch (width) {
        case 'wide':
            return FeaturedPeopleSectionWide(props);
        case 'full':
            return FeaturedPeopleSectionFull(props);
    }
    return null;
}

function FeaturedPeopleSectionWide(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    return (
        <div
            className="px-4 sm:px-6"
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(colors, 'max-w-screen-xl', 'mx-auto', 'px-4', 'sm:px-6', height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20', {
                    'min-h-screen flex flex-col justify-center': height === 'viewport',
                    'mt-10': topGap === 'small',
                    'mt-20': topGap === 'large',
                    'mb-10': bottomGap === 'small',
                    'mb-20': bottomGap === 'large'
                })}
            >
                <div
                    className={classNames('mx-auto', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', {
                        'w-full': height === 'viewport'
                    })}
                >
                    {FeaturedPeopleContent(props)}
                    {FeaturedPeopleVariants(props)}
                    {FeaturedPeopleActions(props)}
                </div>
            </div>
        </div>
    );
}

function FeaturedPeopleSectionFull(props) {
    const colors = props.colors || 'colors-a';
    const height = props.height || 'short';
    const topGap = props.topGap || 'small';
    const bottomGap = props.bottomGap || 'small';
    return (
        <div
            className={classNames(colors, 'px-4', 'relative', 'sm:px-6', height === 'tall' ? 'py-40 lg:py-60' : 'py-14 lg:py-20', {
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'mt-10': topGap === 'small',
                'mt-20': topGap === 'large',
                'mb-10': bottomGap === 'small',
                'mb-20': bottomGap === 'large'
            })}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames('mx-auto', 'relative', 'sm:max-w-screen-sm', 'md:max-w-screen-md', 'lg:max-w-screen-lg', 'xl:max-w-screen-xl', {
                    'w-full': height === 'viewport'
                })}
            >
                {FeaturedPeopleContent(props)}
                {FeaturedPeopleVariants(props)}
                {FeaturedPeopleActions(props)}
            </div>
        </div>
    );
}

function FeaturedPeopleContent(props) {
    if (!props.badge && !props.title && !props.subtitle) {
        return null;
    }
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames({
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
    );
}

function FeaturedPeopleActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <div
            className={classNames('flex flex-wrap items-center mt-12 -mx-2', {
                'justify-center': alignHoriz === 'center',
                'justify-end': alignHoriz === 'right'
            })}
            data-sb-field-path=".actions"
        >
            {props.actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function FeaturedPeopleVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return PeopleVariantA(props);
        case 'variant-b':
            return PeopleVariantB(props);
        case 'variant-c':
            return PeopleVariantC(props);
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
            {people.map((person, index) => (
                <article key={index} data-sb-field-path={`.${index}`}>
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
            {people.map((person, index) => (
                <article key={index} className="sm:flex" data-sb-field-path={`.${index}`}>
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

function PeopleVariantC(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    const alignHoriz = props.alignHoriz || 'left';
    const middleIndex = Math.floor(people.length/2);
    const peopleLeft = people.slice(0, middleIndex);
    const peopleRight = people.slice(-middleIndex);
    return (
        <div
            className={classNames('grid gap-x-6 gap-y-12 max-w-4xl place-items-stretch sm:grid-cols-2', {
                'mt-10': props.badge || props.title || props.subtitle,
                'mx-auto': alignHoriz === 'center',
                'ml-auto': alignHoriz === 'right'
            })}
            data-sb-field-path=".people"
        >
            {peopleLeft.length > 0 && (
                <div className="sm:mt-32">
                    {PeopleListVariantC(peopleLeft)}
                </div>
            )}
            {peopleRight.length > 0 && (
                <div>
                    {PeopleListVariantC(peopleRight, middleIndex)}
                </div>
            )}
        </div>
    );
}

function PeopleListVariantC(people, annotIndexStart = 0) {
    return people.map((person, index, arr) => (
        <article
            key={index}
            className={classNames(arr.length - 1 === index ? '' : 'mb-12')}
            data-sb-field-path={`.${annotIndexStart + index}`}
        >
            {person.image && (
                <div data-sb-field-path=".image">
                    <ImageBlock {...person.image} className="w-full" />
                </div>
            )}
            <div className={classNames(person.image ? 'mt-6' : '')}>
                {(person.firstName || person.lastName || person.role) && (
                    <h2 className={classNames('text-xl sm:text-2xl', person.bio ? 'mb-3' : '')}>{person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>} {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>} {(person.firstName || person.lastName) && person.role && <span className="mx-1">|</span>} {person.role && <span data-sb-field-path=".role">{person.role}</span>}</h2>
                )}
                {person.bio && (
                    <Markdown options={{ forceBlock: true }} data-sb-field-path=".bio">
                        {person.bio}
                    </Markdown>
                )}
            </div>
        </article>
    ));
}
