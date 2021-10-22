import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';
import { getComponent } from '../../components-registry';
import ImageBlock from '../ImageBlock';

export default function FeaturedPeopleSection(props) {
    const colors = props.colors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';
    const sectionStyles = props.styles?.self || {};

    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                backgroundWidth === 'inset' ? 'sb-component-section-inset' : '',
                'sb-component-featured-people-section',
                colors,
                'px-4',
                'sm:px-8'
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'max-w-screen-xl',
                    'mx-auto',
                    'py-5',
                    'sm:py-11',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : '',
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : '',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : ''
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : '')}>
                    {featuredPeopleHeader(props)}
                    {featuredPeopleVariants(props)}
                    {featuredPeopleActions(props)}
                </div>
            </div>
        </div>
    );
}

function featuredPeopleHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 className={classNames('text-3xl', 'sm:text-4xl', styles.title ? mapStyles(styles.title) : '')} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : '')} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
        </div>
    );
}

function featuredPeopleActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex', 'flex-wrap', 'items-center', 'mt-8', '-mx-2', styles.actions ? mapStyles(styles.actions) : '')}
            data-sb-field-path=".actions"
        >
            {props.actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function featuredPeopleVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return peopleVariantA(props);
        case 'variant-b':
            return peopleVariantB(props);
        case 'variant-c':
            return peopleVariantC(props);
    }
    return null;
}

function peopleVariantA(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-6', 'sm:grid-cols-2', 'lg:grid-cols-4', 'lg:gap-8', {
                'mt-10': props.title || props.subtitle
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
                        {(person.firstName || person.lastName) && (
                            <h2 className="text-xl sm:text-2xl">
                                {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                                {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}
                            </h2>
                        )}
                        {person.role && <p data-sb-field-path=".role">{person.role}</p>}
                    </div>
                </article>
            ))}
        </div>
    );
}

function peopleVariantB(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-x-8', 'gap-y-10', 'lg:grid-cols-2', {
                'mt-12': props.title || props.subtitle
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
                        {(person.firstName || person.lastName) && (
                            <h2 className="text-xl sm:text-2xl">
                                {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                                {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}
                            </h2>
                        )}
                        {person.role && <p data-sb-field-path=".role">{person.role}</p>}
                        {person.bio && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
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

function peopleVariantC(props) {
    const people = props.people || [];
    if (people.length === 0) {
        return null;
    }
    const middleIndex = Math.floor(people.length / 2);
    const peopleLeft = people.slice(0, middleIndex);
    const peopleRight = people.slice(-middleIndex);
    return (
        <div
            className={classNames('grid', 'gap-x-6', 'gap-y-12', 'sm:grid-cols-2', {
                'mt-10': props.title || props.subtitle
            })}
            data-sb-field-path=".people"
        >
            {peopleLeft.length > 0 && <div className="sm:mt-32">{peopleListVariantC(peopleLeft)}</div>}
            {peopleRight.length > 0 && <div>{peopleListVariantC(peopleRight, middleIndex)}</div>}
        </div>
    );
}

function peopleListVariantC(people, annotIndexStart = 0) {
    return people.map((person, index, arr) => (
        <article key={index} className={classNames(arr.length - 1 === index ? '' : 'mb-12')} data-sb-field-path={`.${annotIndexStart + index}`}>
            {person.image && (
                <div data-sb-field-path=".image">
                    <ImageBlock {...person.image} className="w-full" />
                </div>
            )}
            <div className={classNames(person.image ? 'mt-6' : '')}>
                {(person.firstName || person.lastName || person.role) && (
                    <h2 className={classNames('text-xl sm:text-2xl', person.bio ? 'mb-3' : '')}>
                        {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                        {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}{' '}
                        {(person.firstName || person.lastName) && person.role && <span className="mx-1">|</span>}{' '}
                        {person.role && <span data-sb-field-path=".role">{person.role}</span>}
                    </h2>
                )}
                {person.bio && (
                    <Markdown options={{ forceBlock: true, forceWrapper: true }} className="sb-markdown" data-sb-field-path=".bio">
                        {person.bio}
                    </Markdown>
                )}
            </div>
        </article>
    ));
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
            return 'max-w-screen-sm';
        case 'wide':
            return 'max-w-screen-lg';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
