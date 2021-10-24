import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import ImageBlock from '../ImageBlock';
import Link from '../../utils/link';
import CloseIcon from '../../svgs/close';
import HamburgerIcon from '../../svgs/hamburger';

export default function Header(props) {
    const primaryColors = props.primaryColors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';
    const headerStyles = props.styles?.self || {};
    return (
        <header
            className={classNames(
                'sb-component',
                'sb-component-header',
                backgroundWidth === 'inset' ? 'sb-component-header-inset' : '',
                primaryColors,
                'px-4',
                'sm:px-8',
                'relative'
            )}
            data-sb-object-id={props.annotationPrefix}
        >
            <div
                className={classNames('mx-auto', headerStyles.width ? mapMaxWidthStyles(headerStyles.width) : null, headerStyles.padding)}
                data-sb-field-path="header"
            >
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                {headerVariants(props)}
            </div>
        </header>
    );
}

function headerVariants(props) {
    const headerVariant = props.headerVariant || 'variant-a';
    switch (headerVariant) {
        case 'variant-a':
            return headerVariantA(props);
        case 'variant-b':
            return headerVariantB(props);
        case 'variant-c':
            return headerVariantC(props);
        case 'variant-d':
            return headerVariantD(props);
        case 'variant-e':
            return headerVariantE(props);
    }
    return null;
}

function headerVariantA(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <div className="flex items-center relative">
            <div>{siteLogoLink(props)}</div>
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center mx-8 space-x-8" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function headerVariantB(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <div className="flex items-center relative">
            <div>{siteLogoLink(props)}</div>
            {primaryLinks.length > 0 && (
                <ul
                    className="hidden lg:flex lg:items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto"
                    data-sb-field-path=".primaryLinks"
                >
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function headerVariantC(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <div className="flex items-center relative">
            <div>{siteLogoLink(props)}</div>
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'lg:items-center', 'space-x-8', primaryLinks.length > 0 ? 'ml-8' : 'ml-auto')}
                    data-sb-field-path=".secondaryLinks"
                >
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function headerVariantD(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <div className="flex items-center relative">
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">{siteLogoLink(props)}</div>
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center space-x-8" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
            {secondaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center ml-auto space-x-8" data-sb-field-path=".secondaryLinks">
                    {listOfLinks(secondaryLinks)}
                </ul>
            )}
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function headerVariantE(props) {
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];
    return (
        <>
            <div className="flex items-center relative">
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">{siteLogoLink(props)}</div>
                {secondaryLinks.length > 0 && (
                    <ul className="hidden lg:flex lg:items-center space-x-8 ml-auto" data-sb-field-path=".secondaryLinks">
                        {listOfLinks(secondaryLinks)}
                    </ul>
                )}
                {(primaryLinks.length > 0 || secondaryLinks.length > 0) && <MobileMenu {...props} />}
            </div>
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex lg:items-center lg:justify-center space-x-8 mt-4" data-sb-field-path=".primaryLinks">
                    {listOfLinks(primaryLinks)}
                </ul>
            )}
        </>
    );
}

function MobileMenu(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const secondaryColors = props.secondaryColors || 'colors-a';
    const primaryLinks = props.primaryLinks || [];
    const secondaryLinks = props.secondaryLinks || [];

    return (
        <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open Menu</span>
                <HamburgerIcon className="fill-current h-6 w-6" />
            </button>
            {isMenuOpen && (
                <div className={classNames(secondaryColors, 'fixed', 'inset-0', 'px-4', 'sm:px-8', 'py-5', 'overflow-y-auto', 'z-10')}>
                    <div className="flex flex-col min-h-full">
                        <div className="flex items-center justify-between mb-10">
                            {siteLogoLink(props)}
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
                            <ul className="flex-grow mb-10 space-y-6" data-sb-field-path=".primaryLinks">
                                {listOfLinks(primaryLinks, true)}
                            </ul>
                        )}
                        {secondaryLinks.length > 0 && (
                            <ul className="mb-10 space-y-5" data-sb-field-path=".secondaryLinks">
                                {listOfLinks(secondaryLinks, true)}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function siteLogoLink(props) {
    return (
        <Link href="/" aria-label={props.title} className="inline-flex items-center" data-sb-field-path=".title#@aria-label .logo">
            {props.logo && <ImageBlock {...props.logo} className={classNames({ 'mr-2': props.isTitleVisible })} />}
            {props.title && props.isTitleVisible && (
                <span className="text-2xl tracking-wide" data-sb-field-path="header.title">
                    {props.title}
                </span>
            )}
        </Link>
    );
}

function listOfLinks(links, inMobileMenu = false) {
    const Action = getComponent('Action');
    return links.map((link, index) => {
        const defaultStyle = link.type === 'Link' ? 'link' : 'secondary';
        const style = link.style || defaultStyle;
        return (
            <li key={index} data-sb-field-path={`.${index}`}>
                <Action {...link} className={classNames(inMobileMenu && style !== 'link' ? 'w-full' : '')} />
            </li>
        );
    });
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
