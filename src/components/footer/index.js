import Link from 'next/link';
import classNames from 'classnames';
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import Twitter from '../../svgs/twitter';
import ReactMarkdown from 'react-markdown';

export default function Index(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const iconMap = {
        facebook: Facebook,
        github: GitHub,
        instagram: Instagram,
        linkedin: LinkedIn,
        twitter: Twitter
    };

    return (
        <footer
            className={classNames('px-4 py-12 lg:px-8 lg:py-16', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'bg-base-50 text-base-900': style === 'style-a',
                'bg-neutral text-base-50': style === 'style-b',
                'bg-neutral text-primary': style === 'style-c',
                'bg-primary text-base-900': style === 'style-d',
                'bg-secondary text-base-900': style === 'style-e'
            })}
        >
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                {((props.title && props.isTitleVisible) || props.logoUrl) && (
                    <div className="sm:col-span-2">
                        <Link href="/">
                            <a aria-label="Go home" title={props.title} className="">
                                {props.logoUrl && <img src={props.logoUrl} alt={props.logoAlt} className="mb-2" />}
                                {props.isTitleVisible && <div className="mb-2 font-medium text-2xl tracking-wide">{props.title}</div>}
                            </a>
                        </Link>
                        {props.info && (
                            <div className="mt-6 lg:max-w-sm">
                                <ReactMarkdown>{props.info}</ReactMarkdown>
                            </div>
                        )}
                    </div>
                )}
                {props.primaryLinks && props.primaryLinks.length > 0 && (
                    <div>
                        <ul className="space-y-6">
                            {props.primaryLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a key={idx} href={link.url} className="hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {((props.socialLinks && props.socialLinks.length > 0) || props.contacts) && (
                    <div>
                        {props.socialLinks && props.socialLinks.length > 0 && (
                            <ul className="flex items-center mb-6 space-x-6">
                                {props.socialLinks.map((link, idx) => {
                                    const IconComponent = iconMap[link.icon];
                                    if (!IconComponent) {
                                        return null;
                                    }
                                    return (
                                        <li key={idx}>
                                            <a href={link.url} className="transition-opacity duration-300 hover:opacity-70">
                                                <IconComponent className="fill-current h-6 w-6" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        {props.contacts && <Contacts {...props.contacts} />}
                    </div>
                )}
            </div>
            <div
                className={classNames(
                    'flex flex-col-reverse justify-between pt-6 border-t lg:flex-row',
                    style === 'style-b' || style === 'style-c' ? 'border-neutral-variant' : 'border-base-900'
                )}
            >
                {props.copyrightText && <p className="text-sm">{props.copyrightText}</p>}
                {props.legalLinks && props.legalLinks.length > 0 && (
                    <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        {props.legalLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.url} className="text-sm hover:underline">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </footer>
    );
}

function Contacts(props) {
    return (
        <div className="space-y-4">
            {props.phoneNumber && (
                <p>
                    <a href={`tel:${props.phoneNumber}`} aria-label={props.phoneAlt} title={props.phoneAlt} className="hover:underline">
                        {props.phoneNumber}
                    </a>
                </p>
            )}
            {props.email && (
                <p>
                    <a href={`mailto:${props.email}`} aria-label={props.emailAlt} title={props.emailAlt} className="hover:underline">
                        {props.email}
                    </a>
                </p>
            )}
            {props.address && (
                <p>
                    <a
                        href={`https://www.google.com/maps/search/${props.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={props.addressAlt}
                        title={props.addressAlt}
                        className="hover:underline"
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}
