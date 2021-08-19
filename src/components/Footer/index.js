import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Action from '../Action';
import Link from '../../utils/link';
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
            data-sb-field-path=""
        >
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                {((props.title && props.isTitleVisible) || props.logoUrl || props.text) && (
                    <div className="sm:col-span-2">
                        {((props.title && props.isTitleVisible) || props.logoUrl) && (
                            <Link
                                href="/"
                                aria-label={props.title}
                                title={props.title}
                                className="inline-block mb-6"
                                data-sb-field-path=".title#@title"
                            >
                                {props.logoUrl && <img src={props.logoUrl} alt={props.logoAltText || ''} className="mb-2" data-sb-field-path=".logoUrl#@src .logoAltText#@alt" />}
                                {props.isTitleVisible && <div className="mb-2 text-2xl tracking-wide" data-sb-field-path=".title">{props.title}</div>}
                            </Link>
                        )}
                        {props.text && <Markdown options={{ forceBlock: true }} className="lg:max-w-sm">{props.text}</Markdown>}
                    </div>
                )}
                {props.primaryLinks && props.primaryLinks.length > 0 && (
                    <div>
                        <ul className="space-y-6" data-sb-field-path=".primaryLinks">
                            {props.primaryLinks.map((link, index) => (
                                <li key={index} data-sb-field-path={`.${index}`}>
                                    <Action {...link}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {((props.socialLinks && props.socialLinks.length > 0) || props.contacts) && (
                    <div>
                        {props.socialLinks && props.socialLinks.length > 0 && (
                            <ul className="flex items-center mb-6 space-x-6" data-sb-field-path=".socialLinks">
                                {props.socialLinks.map((link, index) => {
                                    const IconComponent = iconMap[link.icon];
                                    if (!IconComponent) {
                                        return null;
                                    }
                                    return (
                                        <li key={index} data-sb-field-path={`.${index}`}>
                                            <Link
                                                href={link.url}
                                                aria-label={link.altText}
                                                title={link.altText}
                                                className="transition-opacity duration-300 hover:opacity-80"
                                                data-sb-field-path=".url#@href .altText#@title .label#span[1] .icon#svg[1]"
                                            >
                                                {link.label && <span className="sr-only">{link.label}</span>}
                                                <IconComponent className="fill-current h-6 w-6" />
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
                {props.copyrightText && <p className="text-sm" data-sb-field-path=".copyrightText">{props.copyrightText}</p>}
                {props.legalLinks && props.legalLinks.length > 0 && (
                    <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row" data-sb-field-path=".legalLinks">
                        {props.legalLinks.map((link, index) => (
                            <li key={index} data-sb-field-path={`.${index}`}>
                                <Action
                                    {...link}
                                    className="text-sm"
                                />
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
        <div className="space-y-4" data-sb-field-path=".contacts">
            {props.phoneNumber && (
                <p>
                    <a
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAltText}
                        title={props.phoneAltText}
                        data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title"
                        className="sb-link"
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
                        data-sb-field-path=".email .email#@href .emailAltText#@title"
                        className="sb-link"
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
                        data-sb-field-path=".address .address#@href .addressAltText#@title"
                        className="sb-link"
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}
