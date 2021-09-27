import * as React from 'react';
import classNames from 'classnames';
import Link from '../../utils/link';
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import Twitter from '../../svgs/twitter';

const iconMap = {
    facebook: Facebook,
    github: GitHub,
    instagram: Instagram,
    linkedin: LinkedIn,
    twitter: Twitter
};

export default function Social(props) {
    const { label, altText, url, showIcon } = props;
    const icon = props.icon || 'facebook';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props.annotationPrefix || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    const style = props.style || 'link';
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    return (
        <Link
            href={url}
            aria-label={altText}
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', style === 'link' ? 'sb-component-link' : 'sb-component-btn', cssClasses, {
                'sb-component-btn-primary': style === 'primary',
                'sb-component-btn-secondary': style === 'secondary'
            })}
            data-sb-field-path={annotations.join(' ').trim()}
        >
            {label && <span>{label}</span>}
            {showIcon && IconComponent && (
                <IconComponent className={classNames('fill-current h-5 w-5', label ? 'mr-1.5 order-first' : '')} />
            )}
        </Link>
    );
}
