import classNames from 'classnames';
import Link from 'next/link';
import ArrowRight from '../../svgs/arrow-right';
import Cart from '../../svgs/cart';

export default function Button({ label, url, icon, altText, type, className, annotationPrefix = '' }) {
    const iconMap = {
        arrowRight: ArrowRight,
        cart: Cart
    };
    const IconComponent = icon ? iconMap[icon] : null;
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.label${IconComponent ? '#text()[1]' : ''}`,
        altText ? `${annotationPrefix}.altText#@title` : '',
        IconComponent ? `${annotationPrefix}.icon#svg[1]` : ''
    ];

    return (
        <Link href={url}>
            <a
                aria-label={altText}
                title={altText}
                className={classNames(
                    'sb-btn',
                    type === 'primary-button' ? 'sb-btn-primary' : 'sb-btn-secondary',
                    className
                )}
                data-sb-field-path={annotations.join(' ')}
            >
                {label}
                {IconComponent && <IconComponent className="fill-current h-5 ml-2 w-5" />}
            </a>
        </Link>
    );
}
