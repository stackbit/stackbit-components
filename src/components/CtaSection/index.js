import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import Button from '../Button';
import Link from '../Link';
import React from 'react';
import InlineMarkdown from '../InlineMarkdown';

export default function CtaSection(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
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
                    'xl:max-w-screen-xl': width !== 'narrow',
                    'w-full': height === 'viewport'
                })}
            >
                <CtaVariants {...props} />
            </div>
        </div>
    );
}

function CtaVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return CtaButtonsBottom(props);
        case 'variant-b':
            return CtaButtonsRight(props);
    }
    return null;
}

function CtaButtonsBottom(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    return (
        <div className={classNames('max-w-3xl mx-auto', {
            'text-center': alignHoriz === 'center',
            'text-right': alignHoriz === 'right'
        })}>
            {CtaContent(props)}
            {actions.length > 0 && (
                <div
                    className={classNames('flex flex-wrap items-center -mx-2', {
                        'mt-8': props.badge || props.title || props.text,
                        'justify-center': alignHoriz === 'center',
                        'justify-end': alignHoriz === 'right'
                    })}
                    data-sb-field-path=".actions"
                >
                    {CtaActions(props)}
                </div>
            )}
        </div>
    );
}

function CtaButtonsRight(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    return (
        <div className="max-w-3xl mx-auto lg:flex lg:items-center">
            {(props.badge || props.title || props.text) && (
                <div className={classNames({
                    'text-center': alignHoriz === 'center',
                    'text-right': alignHoriz === 'right'
                })}>
                    {CtaContent(props)}
                </div>
            )}
            {actions.length > 0 && (
                <div
                    className={classNames('flex flex-col -mx-2 lg:pl-8', {
                        'mt-10 lg:mt-0': props.badge || props.title || props.text,
                        'items-start lg:items-center': alignHoriz === 'left',
                        'items-center': alignHoriz === 'center',
                        'items-end lg:items-center': alignHoriz === 'right'
                    })}
                    data-sb-field-path=".actions"
                >
                    {CtaActions(props)}
                </div>
            )}
        </div>
    );
}

function CtaContent(props) {
    return (
        <>
            {props.badge && <Badge label={props.badge} className="sb-badge inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
            {props.title && (
                <h2 className="text-3xl tracking-tight sm:text-4xl mb-6" data-sb-field-path=".title">
                    <InlineMarkdown>{props.title}</InlineMarkdown>
                </h2>
            )}
            {props.text && <Markdown className="md:text-lg" data-sb-field-path=".text">{props.text}</Markdown>}
        </>
    );
}

function CtaActions(props) {
    return (
        props.actions.map((action, idx) =>
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
        )
    );
}
