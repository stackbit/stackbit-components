import React from 'react';
import classNames from 'classnames';
import Link from '../../utils/link';
import ArrowRight from '../../svgs/arrow-right';
import Cart from '../../svgs/cart';
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import Twitter from '../../svgs/twitter';

export default function Action({ type, label, url, icon, altText, style, className, annotationPrefix = '' }) {
  const iconMap = {
    arrowRight: ArrowRight,
    cart: Cart,
    facebook: Facebook,
    github: GitHub,
    instagram: Instagram,
    linkedin: LinkedIn,
    twitter: Twitter
  };
  const IconComponent = icon ? iconMap[icon] : null;
  const annotations = [
    `${annotationPrefix}`,
    `${annotationPrefix}.url#@href`,
    `${annotationPrefix}.altText#@title`,
    `${annotationPrefix}.label${IconComponent ? '#text()[1]' : ''}`,
    IconComponent ? `${annotationPrefix}.icon#svg[1]` : ''
  ];

  const defaultStyle = (type === 'Link') ? 'link' : 'secondary';
  style = style || defaultStyle;

  return (
    <Link
      href={url}
      aria-label={altText}
      title={altText}
      className={classNames(style === 'link' ? 'sb-link': 'sb-btn', className, {
        'sb-btn-primary': style === 'primary',
        'sb-btn-secondary': style === 'secondary'
      })}
      data-sb-field-path={annotations.join(' ').trim()}
    >
      {label}
      {IconComponent && <IconComponent className="fill-current h-5 ml-2 w-5" />}
    </Link>
  );
}
