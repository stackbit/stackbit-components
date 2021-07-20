import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';
import Hamburger from '../../svgs/hamburger';
import Close from '../../svgs/close';
import Button from '../button';

export default function Index(props) {
    const primaryStyle = props.primaryStyle || 'style-a';
    const width = props.width || 'full';
    const mobileNavVariant = props.mobileNavVariant || 'variant-a';

    return (
        <nav>
            <div
                className={classNames('px-4 py-5 lg:px-8', {
                    'mx-auto': width !== 'full',
                    'max-w-screen-xl': width === 'wide',
                    'max-w-screen-lg': width === 'narrow',
                    relative: mobileNavVariant === 'variant-b',
                    'bg-base-50 text-base-900': primaryStyle === 'style-a',
                    'bg-neutral text-base-50': primaryStyle === 'style-b',
                    'bg-neutral text-primary': primaryStyle === 'style-c',
                    'bg-primary text-base-900': primaryStyle === 'style-d',
                    'bg-secondary text-base-900': primaryStyle === 'style-e'
                })}
            >
                <Link href="#content">
                    <a className="sr-only">Skip to main content</a>
                </Link>
                <div
                    className={classNames('flex items-center', {
                        relative: mobileNavVariant === 'variant-a'
                    })}
                >
                    {desktopNavVariants(props)}
                </div>
            </div>
        </nav>
    );
}

function desktopNavVariants(props) {
    const primaryStyle = props.primaryStyle || 'style-a';
    const desktopNavVariant = props.desktopNavVariant || 'variant-a';
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logoUrl;
    const logoAlt = props.logoAlt || '';
    const primaryLinks = props.primaryLinks;
    const secondaryLinks = props.secondaryLinks;

    if (desktopNavVariant === 'variant-a') {
        return (
            <>
                <div>{siteLogoLink({ title, logo, logoAlt, isTitleVisible })}</div>
                {primaryLinks && primaryLinks.length > 0 && (
                    <ul className="hidden ml-8 space-x-8 lg:flex lg:items-center">{listOfLinks(primaryLinks, primaryStyle)}</ul>
                )}
                {secondaryLinks && secondaryLinks.length > 0 && (
                    <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center">{listOfLinks(secondaryLinks, primaryStyle)}</ul>
                )}
                {mobileNavVariants(props)}
            </>
        );
    } else if (desktopNavVariant === 'variant-b') {
        return (
            <>
                <div>{siteLogoLink({ title, logo, logoAlt, isTitleVisible })}</div>
                {primaryLinks && primaryLinks.length > 0 && (
                    <ul className="hidden absolute space-x-8 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto lg:flex lg:items-center">
                        {listOfLinks(primaryLinks, primaryStyle)}
                    </ul>
                )}
                {secondaryLinks && secondaryLinks.length > 0 && (
                    <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center">{listOfLinks(secondaryLinks, primaryStyle)}</ul>
                )}
                {mobileNavVariants(props)}
            </>
        );
    } else if (desktopNavVariant === 'variant-c') {
        const links = (primaryLinks || []).concat(secondaryLinks || []);
        return (
            <>
                <div>{siteLogoLink({ title, logo, logoAlt, isTitleVisible })}</div>
                {links.length > 0 && (
                    <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center">{listOfLinks(primaryLinks.concat(secondaryLinks), primaryStyle)}</ul>
                )}
                {mobileNavVariants(props)}
            </>
        );
    } else if (desktopNavVariant === 'variant-d') {
        return (
            <>
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
                    {siteLogoLink({ title, logo, logoAlt, isTitleVisible })}
                </div>
                {primaryLinks && primaryLinks.length > 0 && (
                    <ul className="hidden space-x-8 lg:flex lg:items-center">{listOfLinks(primaryLinks, primaryStyle)}</ul>
                )}
                {secondaryLinks && secondaryLinks.length > 0 && (
                    <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center">{listOfLinks(secondaryLinks, primaryStyle)}</ul>
                )}
                {mobileNavVariants(props)}
            </>
        );
    }
}

function mobileNavVariants(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const secondaryStyle = props.secondaryStyle || 'style-a';
    const mobileNavVariant = props.mobileNavVariant || 'variant-a';
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logoUrl;
    const logoAlt = props.logoAlt || '';
    const primaryLinks = props.primaryLinks;
    const secondaryLinks = props.secondaryLinks;

    if (mobileNavVariant === 'variant-a') {
        return (
            <div className="ml-auto lg:hidden">
                <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                    <span className="sr-only">Open Menu</span>
                    <Hamburger className="fill-current h-6 w-6" />
                </button>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full z-10">
                        <div
                            className={classNames('p-5 border rounded shadow-sm', {
                                'bg-base-50 text-base-900': secondaryStyle === 'style-a',
                                'bg-neutral border-base-900 text-base-50': secondaryStyle === 'style-b',
                                'bg-neutral border-base-900 text-primary': secondaryStyle === 'style-c',
                                'bg-primary border-primary text-base-900': secondaryStyle === 'style-d',
                                'bg-secondary border-secondary-variant text-base-900': secondaryStyle === 'style-e'
                            })}
                        >
                            <div className="flex items-center justify-between mb-6">
                                {siteLogoLink({ title, logo, logoAlt, isTitleVisible })}
                                <button
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    className="p-2 -mt-2 -mr-2 focus:outline-none"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Close className="fill-current h-6 w-6" />
                                </button>
                            </div>
                            <ul className="space-y-5">{listOfLinks(primaryLinks.concat(secondaryLinks), secondaryStyle, true)}</ul>
                        </div>
                    </div>
                )}
            </div>
        );
    } else if (mobileNavVariant === 'variant-b') {
        return (
            <div className="ml-auto lg:hidden">
                <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                    <span className="sr-only">Open Menu</span>
                    <Hamburger className="fill-current h-6 w-6" />
                </button>
                {isMenuOpen && (
                    <div>
                        <div
                            className={classNames(
                                'fixed inset-0 bg-opacity-50',
                                secondaryStyle === 'style-b' || secondaryStyle === 'style-c' ? 'bg-primary' : 'bg-base-900'
                            )}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <div
                            className={classNames('fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-md px-4 py-8 overflow-y-auto', {
                                'bg-base-50 text-base-900': secondaryStyle === 'style-a',
                                'bg-neutral border-base-900 text-base-50': secondaryStyle === 'style-b',
                                'bg-neutral border-base-900 text-primary': secondaryStyle === 'style-c',
                                'bg-primary border-primary text-base-900': secondaryStyle === 'style-d',
                                'bg-secondary border-secondary-variant text-base-900': secondaryStyle === 'style-e'
                            })}
                        >
                            <div className="flex items-center justify-between mb-6">
                                {siteLogoLink({ title, logo, logoAlt, isTitleVisible })}
                                <button
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    className="p-2 -mt-2 -mr-2 focus:outline-none"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Close className="fill-current h-6 w-6" />
                                </button>
                            </div>
                            <ul className="space-y-5">{listOfLinks(primaryLinks.concat(secondaryLinks), secondaryStyle, true)}</ul>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

function siteLogoLink({ title, logo, logoAlt, isTitleVisible }) {
    return (
        <Link href="/">
            <a aria-label={title} title={title} className="inline-flex items-center">
                {logo && <img src={logo} alt={logoAlt} className={classNames({ 'mr-2': isTitleVisible })} />}
                {isTitleVisible && <span className="text-2xl font-medium tracking-wide">{title}</span>}
            </a>
        </Link>
    );
}

function listOfLinks(links, style, inMenu = false) {
    return links.map((link, idx) => (
        <li key={idx}>
            {link.style !== 'button' ? (
                <Link href={link.url}>
                    <a
                        aria-label={link.alt}
                        title={link.alt}
                        className={
                            !inMenu
                                ? 'tracking-wide transition-opacity duration-200 hover:opacity-80'
                                : 'tracking-wide transition-opacity duration-200 hover:opacity-70'
                        }
                    >
                        {link.label}
                    </a>
                </Link>
            ) : (
                <Button
                    label={link.label}
                    url={link.url}
                    alt={link.alt}
                    className={classNames(
                        'px-4 py-5 lg:px-8',
                        inMenu ? 'w-full' : '',
                        style === 'style-a' ? 'bg-primary text-base-900' : 'bg-neutral-variant text-base-50'
                    )}
                />
            )}
        </li>
    ));
}
