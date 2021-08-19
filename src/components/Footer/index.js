import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Link from 'next/link';
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import Twitter from '../../svgs/twitter';


export default function Footer(props) {
    const colors = props.colors || 'colors-a';
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
            className={classNames(colors, 'px-4 py-12 lg:px-8 lg:py-16', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow'
            })}
        >
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                {((props.title && props.isTitleVisible) || props.logoUrl || props.text) && (
                    <div className="sm:col-span-2">
                        {((props.title && props.isTitleVisible) || props.logoUrl) && (
                            <Link href="/">
                                <a aria-label="Go home" title={props.title} className="inline-block mb-6">
                                    {props.logoUrl && <img src={props.logoUrl} alt={props.logoAltText} className="mb-2" />}
                                    {props.isTitleVisible && <div className="mb-2 text-2xl tracking-wide">{props.title}</div>}
                                </a>
                            </Link>
                        )}
                        {props.text && <Markdown options={{ forceBlock: true }} className="lg:max-w-sm">{props.text}</Markdown>}
                    </div>
                )}
                {props.primaryLinks && props.primaryLinks.length > 0 && (
                    <div>
                        <ul className="space-y-6">
                            {props.primaryLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a key={idx} href={link.url}>
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
                                            <Link href={link.url}>
                                                <a
                                                    aria-label={link.alt}
                                                    title={link.alt}
                                                    className="transition-opacity duration-300 hover:opacity-80"
                                                >
                                                    {link.label && <span className="sr-only">{link.label}</span>}
                                                    <IconComponent className="fill-current h-6 w-6" />
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        {props.contacts && <Contacts {...props.contacts} />}
                    </div>
                )}
            </div>
            <div className="sb-divider" />
            <div
                className="flex flex-col-reverse justify-between pt-6 lg:flex-row">
                {props.copyrightText && <p className="text-sm">{props.copyrightText}</p>}
                {props.legalLinks && props.legalLinks.length > 0 && (
                    <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        {props.legalLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.url} className="text-sm">
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
                    <a
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAltText}
                        title={props.phoneAltText}
                    >
                        {props.phoneNumber}
                    </a>
                </p>
            )}
            {props.email && (
                <p>
                    <a
                        href={`mailto:${props.email}`}
                        aria-label={props.emailAltText}
                        title={props.emailAltText}
                    >
                        {props.email}
                    </a>
                </p>
            )}
            {props.address && (
                <p>
                    <a
                        href={`https://www.google.com/maps/search/${props.address}`}
                        aria-label={props.addressAltText}
                        title={props.addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}
