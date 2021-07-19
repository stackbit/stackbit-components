import classNames from 'classnames';

export default function Badge({ label, className }) {
    if (!label) {
        return null;
    }
    return (
        <p
            className={classNames(
                'inline-block px-3 py-px mb-4 text-xs font-medium tracking-wider uppercase rounded-full',
                className
            )}
        >
                {label}
        </p>
    );
}
