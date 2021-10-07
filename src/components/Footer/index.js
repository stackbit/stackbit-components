import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Action from '../Action';
import ImageBlock from '../ImageBlock';
import Social from '../Social';
import Link from '../../utils/link';

export default function Footer(props) {
    const colors = props.colors || 'colors-a';
    const width = props.width || 'wide';
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const legalLinks = props.legalLinks || [];
    return (
        <footer
            className={classNames(
                'component',
                'component-footer'
            )}
            data-sb-object-id={props.annotationPrefix}
        >
            <div
                className={classNames(
                    'component',
                    'component-footer',
                    width === 'full' ? colors : '',
                    'px-4',
                    'sm:px-6'
                )}
                data-sb-field-path="footer"
            >
                <div
                    className={classNames(
                        width === 'wide' ? colors : '',
                        'max-w-screen-2xl',
                        'mx-auto',
                        'px-4',
                        'sm:px-8',
                        'md:px-12',
                        'lg:px-16',
                        'py-10',
                        'md:py-20'
                    )}
                >
                    {((props.title && props.isTitleVisible) || props.logo || props.text) && (
                        <div className="mb-12">
                            {((props.title && props.isTitleVisible) || props.logo) && (
                                <Link href="/" aria-label={props.title} className="inline-block mb-4" data-sb-field-path=".title#@aria-label .logo">
                                    {props.logo && <ImageBlock {...props.logo} className="mb-2" />}
                                    {props.isTitleVisible && (
                                        <div className="mb-2 text-2xl tracking-wide" data-sb-field-path="footer.title">
                                            {props.title}
                                        </div>
                                    )}
                                </Link>
                            )}
                            {props.text && (
                                <Markdown options={{ forceBlock: true }} className="max-w-xl" data-sb-field-path=".text">
                                    {props.text}
                                </Markdown>
                            )}
                        </div>
                    )}
                    {(primaryLinks.length > 0 || socialLinks.length > 0 || props.contacts) && (
                        <div className="sm:flex sm:justify-between sm:items-end">
                            {primaryLinks.length > 0 && (
                                <div className="mb-6">
                                    <ul className="flex flex-col items-start mb-6 space-y-6 text-lg" data-sb-field-path=".primaryLinks">
                                        {primaryLinks.map((link, index) => (
                                            <li key={index} data-sb-field-path={`.${index}`}>
                                                <Action {...link} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {(socialLinks.length > 0 || props.contacts) && (
                                <div className="mb-6">
                                    {socialLinks.length > 0 && (
                                        <ul className="flex items-center mb-6 space-x-10" data-sb-field-path=".socialLinks">
                                            {socialLinks.map((link, index) => (
                                                <li key={index} data-sb-field-path={`.${index}`}>
                                                    <Social {...link} />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {props.contacts && <Contacts {...props.contacts} />}
                                </div>
                            )}
                        </div>
                    )}
                    <div className="sb-divider" />
                    <div className="flex flex-col-reverse justify-between pt-6 lg:flex-row">
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
            </div>
        </footer>
    );
}

function Contacts(props) {
    return (
        <div className="mb-6 space-y-4 text-lg" data-sb-field-path=".contacts">
            {props.phoneNumber && (
                <p>
                    <a
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAltText}
                        title={props.phoneAltText}
                        data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title"
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
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}
