import NextLink from 'next/link';
import classNames from 'classnames';
import ArrowRight from '../../svgs/arrow-right';
import Cart from '../../svgs/cart';

export default function Link({ label, url, icon, altText, className, annotationPrefix = '' }) {
    const iconMap = {
        arrowRight: ArrowRight,
        cart: Cart
    };
    const IconComponent = icon ? iconMap[icon] : null;
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@title`,
        `${annotationPrefix}.label${IconComponent ? '#text()[1]' : ''}`,
        IconComponent ? `${annotationPrefix}.icon#svg[1]` : ''
    ];

    return (
        <NextLink href={url}>
            <a
                aria-label={altText}
                title={altText}
                className={classNames('inline-flex items-center font-normal transition-colors duration-200', className)}
                data-sb-field-path={annotations.join(' ').trim()}
            >
                {label}
                {IconComponent && <IconComponent className="fill-current h-5 ml-2 w-5" />}
            </a>
        </NextLink>
    );
}
