import classNames from 'classnames';

export default function Badge({ label, className }) {
    if (!label) {
        return null;
    }
    return <p className={classNames('sb-badge', className)} data-sb-field-path=".badge">{label}</p>;
}
