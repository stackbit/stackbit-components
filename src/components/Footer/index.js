import React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Action from '../Action';
import ImageBlock from '../ImageBlock';
import Link from '../../utils/link';
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import Twitter from '../../svgs/twitter';

export default function Footer(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const iconMap = {
        facebook: Facebook,
        github: GitHub,
        instagram: Instagram,
        linkedin: LinkedIn,
        twitter: Twitter
    };
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const legalLinks = props.legalLinks || [];
    return (
        <footer
            className={classNames(width === 'full' ? `${colors} py-14 lg:py-20`: '', 'px-4', 'sm:px-6')}
            data-sb-field-path={`${props.annotationPrefix}:footer`}
        >
            <div className={classNames(width === 'wide' ? `${colors} py-14 lg:py-20 px-4`: '', 'max-w-screen-xl', 'mx-auto')}>
                {((props.title && props.isTitleVisible) || props.logo || props.text) && (
                    <div className="mb-12">
                        {((props.title && props.isTitleVisible) || props.logo) && (
                            <Link
                                href="/"
                                aria-label={props.title}
                                title={props.title}
                                className="inline-block mb-4"
                                data-sb-field-path=".title#@title .logo"
                            >
                                {props.logo && <ImageBlock {...props.logo} className="mb-2" />}
                                {props.isTitleVisible && <div className="mb-2 text-2xl tracking-wide" data-sb-field-path=".title">{props.title}</div>}
                            </Link>
                        )}
                        {props.text && <Markdown options={{ forceBlock: true }} className="max-w-xl" data-sb-field-path=".text">{props.text}</Markdown>}
                    </div>
                )}
                {(primaryLinks.length > 0 || socialLinks.length > 0 || props.contacts) && (
                    <div className="sm:flex sm:justify-between sm:items-end">
                        {primaryLinks.length > 0 && (
                            <div className="mb-12">
                                <ul className="space-y-6 text-lg" data-sb-field-path=".primaryLinks">
                                    {primaryLinks.map((link, index) => (
                                        <li key={index} data-sb-field-path={`.${index}`}>
                                            <Action {...link}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {((socialLinks.length > 0) || props.contacts) && (
                            <div className="mb-12">
                                {socialLinks.length > 0 && (
                                    <ul className="flex items-center mb-6 space-x-10" data-sb-field-path=".socialLinks">
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
                                                        <IconComponent className="fill-current h-5 w-5" />
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
                )}
                <div className="sb-divider" />
                <div
                    className="flex flex-col-reverse justify-between pt-6 lg:flex-row">
                    {props.copyrightText && <p data-sb-field-path=".copyrightText">{props.copyrightText}</p>}
                    {legalLinks.length > 0 && (
                        <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row" data-sb-field-path=".legalLinks">
                            {legalLinks.map((link, index) => (
                                <li key={index} data-sb-field-path={`.${index}`}>
                                    <Action {...link} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </footer>
    );
}

function Contacts(props) {
    return (
        <div className="space-y-4 text-lg" data-sb-field-path=".contacts">
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
