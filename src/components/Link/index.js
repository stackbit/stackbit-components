import NextLink from 'next/link';
import classNames from 'classnames';
import ArrowRight from '../../svgs/arrow-right';
import Cart from '../../svgs/cart';

export default function Link({ label, url, icon, altText, className }) {
    const iconMap = {
        arrowRight: ArrowRight,
        cart: Cart
    };
    const IconComponent = icon ? iconMap[icon] : null;

    return (
        <NextLink href={url}>
            <a
                aria-label={altText}
                title={altText}
                className={classNames('inline-flex items-center font-normal transition-colors duration-200', className)}
            >
                {label}
                {IconComponent && <IconComponent className="fill-current h-5 ml-2 w-5" />}
            </a>
        </NextLink>
    );
}
