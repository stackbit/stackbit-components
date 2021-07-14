import classNames from 'classnames';
import Link from 'next/link';
import Cart from '../../svgs/cart';

const icons = {
    cart: Cart
};

export default function Button({ label, url, icon, alt, className }) {
    return (
        <Link href={url}>
            <a
                aria-label={alt}
                title={alt}
                className={classNames(
                    'inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none',
                    className
                )}
            >
                {icon && icon in icons ? (
                    <>
                        <span className="mr-3">{label}</span>
                        {icons[icon]()}
                    </>
                ) : (
                    label
                )}
            </a>
        </Link>
    );
}
