import classNames from 'classnames';
import Link from 'next/link';
import ArrowRight from '../../svgs/arrow-right';
import Cart from '../../svgs/cart';

export default function Button({ label, url, icon, alt, type, className }) {
    const iconMap = {
        arrowRight: ArrowRight,
        cart: Cart
    };
    const IconComponent = icon ? iconMap[icon] : null;
    return (
        <Link href={url}>
            <a
                aria-label={alt}
                title={alt}
                className={classNames(
                    'sb-btn',
                    type === 'primary-button' ? 'sb-btn-primary' : 'sb-btn-secondary',
                    className
                )}
            >
                {label}
                {IconComponent && <IconComponent className="fill-current h-5 ml-2 w-5" />}
            </a>
        </Link>
    );
}
