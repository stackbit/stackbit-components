import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import Action from '../Action';
import ImageBlock from '../ImageBlock';
import Link from '../../utils/link';
import CloseIcon from '../../svgs/close';
import HamburgerIcon from '../../svgs/hamburger';

export default function NavBar(props) {
    const primaryColors = props.primaryColors || 'colors-a';
    const mobileNavVariant = props.mobileNavVariant || 'variant-a';
    const width = props.width || 'wide';
    return (
        <nav
            className={classNames(
                'component',
                'component-nav-bar',
                width === 'full' ? primaryColors : '',
                'px-4',
                'sm:px-6'
            )}
            data-sb-field-path={`${props.annotationPrefix}:navBar`}
        >
            <div
                className={classNames(
                    width === 'wide' ? `${primaryColors} max-w-screen-2xl mx-auto px-4` : '',
                    'py-5'
                )}
            >
                <Link href="#content" className="sr-only">
                    Skip to main content
                </Link>
                <div className={classNames('flex items-center', mobileNavVariant === 'variant-a' ? 'relative' : 'lg:relative')}>
                    {desktopNavVariants(props)}
                </div>
            </div>
        </nav>
    );
}

function desktopNavVariants(props) {
    const desktopNavVariant = props.desktopNavVariant || 'variant-a';
    switch (desktopNavVariant) {
        case 'variant-a':
            return desktopNavVariantA(props);
        case 'variant-b':
            return desktopNavVariantB(props);
        case 'variant-c':
            return desktopNavVariantC(props);
        case 'variant-d':
            return desktopNavVariantD(props);
    }
    return null;
}

function desktopNavVariantA(props) {
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logo;
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <>
            <div>{siteLogoLink({ title, isTitleVisible, logo })}</div>
            {primaryLinks.length > 0 && (
                <ul className="hidden ml-8 space-x-8 lg:flex lg:items-center" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {mobileNavVariants(props)}
        </>
    );
}

function desktopNavVariantB(props) {
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logo;
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <>
            <div>{siteLogoLink({ title, isTitleVisible, logo })}</div>
            {primaryLinks.length > 0 && (
                <ul
                    className="hidden absolute space-x-8 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto lg:flex lg:items-center"
                    data-sb-field-path=".primaryLinks"
                >
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {mobileNavVariants(props)}
        </>
    );
}

function desktopNavVariantC(props) {
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logo;
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    const links = primaryLinks.concat(secondaryLinks);
    return (
        <>
            <div>{siteLogoLink({ title, isTitleVisible, logo })}</div>
            {links.length > 0 && (
                <ul className="hidden ml-auto space-x-8 lg:flex lg:items-center" data-sb-field-path=".primaryLinks .secondaryLinks">
                    {listOfLinks(primaryLinks.concat(secondaryLinks))}
                </ul>
            )}
            {mobileNavVariants(props)}
        </>
    );
}

function desktopNavVariantD(props) {
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logo;
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <>
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
                {siteLogoLink({ title, isTitleVisible, logo })}
            </div>
            {primaryLinks.length > 0 && (
                <ul className="hidden space-x-8 lg:flex lg:items-center" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden ml-auto space-x-4 lg:flex lg:items-center" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {mobileNavVariants(props)}
        </>
    );
}

function mobileNavVariants(props) {
    const mobileNavVariant = props.mobileNavVariant || 'variant-a';
    switch (mobileNavVariant) {
        case 'variant-a':
            return mobileNavVariantA(props);
        case 'variant-b':
            return mobileNavVariantB(props);
    }
    return null;
}

function mobileNavVariantA(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const secondaryColors = props.secondaryColors || 'colors-a';
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logo;
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    const links = primaryLinks.concat(secondaryLinks);
    return (
        <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open Menu</span>
                <HamburgerIcon className="fill-current h-6 w-6" />
            </button>
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                    <div className={classNames(secondaryColors, 'p-5 shadow-lg')}>
                        <div className="flex items-center justify-between mb-6">
                            {siteLogoLink({ title, isTitleVisible, logo })}
                            <button
                                aria-label="Close Menu"
                                title="Close Menu"
                                className="p-2 -mt-2 -mr-2 focus:outline-none"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <CloseIcon className="fill-current h-6 w-6" />
                            </button>
                        </div>
                        <ul className="space-y-5" data-sb-field-path=".primaryLinks .secondaryLinks">
                            {listOfLinks(links, true)}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

function mobileNavVariantB(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const secondaryColors = props.secondaryColors || 'colors-a';
    const title = props.title;
    const isTitleVisible = props.isTitleVisible;
    const logo = props.logo;
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open Menu</span>
                <HamburgerIcon className="fill-current h-6 w-6" />
            </button>
            {isMenuOpen && (
                <div>
                    <div className="sb-overlay fixed inset-0" onClick={() => setIsMenuOpen(false)} />
                    <div className={classNames(secondaryColors, 'fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-md px-4 py-5 overflow-y-auto z-10')}>
                        <div className="flex items-center justify-between mb-6">
                            {siteLogoLink({ title, isTitleVisible, logo })}
                            <button
                                aria-label="Close Menu"
                                title="Close Menu"
                                className="p-2 -mt-2 -mr-2 focus:outline-none"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <CloseIcon className="fill-current h-6 w-6" />
                            </button>
                        </div>
                        {primaryLinks.length > 0 && (
                            <ul className="mb-5 space-y-5" data-sb-field-path=".primaryLinks">
                                {listOfLinks(primaryLinks, true)}
                            </ul>
                        )}
                        {secondaryLinks.length > 0 && (
                            <ul className="mt-auto space-y-5" data-sb-field-path=".secondaryLinks">
                                {listOfLinks(secondaryLinks, true)}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function siteLogoLink({ title, isTitleVisible, logo }) {
    return (
        <Link href="/" aria-label={title} title={title} className="inline-flex items-center" data-sb-field-path=".title#@title .logo">
            {logo && <ImageBlock {...logo} className={classNames({ 'mr-2': isTitleVisible })} />}
            {isTitleVisible && (
                <span className="text-2xl tracking-wide" data-sb-field-path=".title">
                    {title}
                </span>
            )}
        </Link>
    );
}

function listOfLinks(links, inMenu = false) {
    return links.map((link, index) => {
        const defaultStyle = link.type === 'Link' ? 'link' : 'secondary';
        const style = link.style || defaultStyle;
        return (
            <li key={index} data-sb-field-path={`.${index}`}>
                <Action {...link} className={classNames(inMenu && style !== 'link' ? 'w-full' : '')} />
            </li>
        );
    });
}
