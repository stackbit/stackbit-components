import Link from 'next/link';
import classNames from 'classnames';
import ArrowRight from '../../svgs/arrow-right';

const icons = {
    arrowRight: ArrowRight
};

export default function Button({ label, url, icon, alt, className }) {
    return (
        <Link href={url}>
            <a
                aria-label={alt}
                title={alt}
                className={classNames(
                    'inline-flex items-center font-semibold transition-colors duration-200',
                    className
                )}
            >
                {label}
                {icon && icon in icons && icons[icon]()}
            </a>
        </Link>
    );
}
