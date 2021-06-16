import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../svgs/logo';
import classNames from 'classnames';

import getThemeClass from './navbar.theme';

export default function NavBar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const companyName = props.companyName;
    const leftLinks = props.leftLinks;
    const rightLinks = props.rightLinks;
    return (
        <div className={`${getThemeClass('rootDiv')} px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8`}>
            <div className="relative flex items-center justify-between">
                {navBarVariants(props)}
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                            <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                            <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-10">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link href="/">
                                            <a aria-label={companyName} title={companyName} className="inline-flex items-center">
                                                <Logo className="text-deep-purple-accent-400" />
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">{companyName}</span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">{listOfLinks(leftLinks.concat(rightLinks), true)}</ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function navBarVariants(props) {
    const companyName = props.companyName;
    const leftLinks = props.leftLinks;
    const rightLinks = props.rightLinks;
    const navBarLinksPosition = props.navBarLinksPosition || 'left';

    if (navBarLinksPosition === 'left') {
        return (
            <>
                <div className="flex items-center">
                    {siteLogoLink({ companyName, navBarLinksPosition })}
                    {leftLinks && leftLinks.length > 0 && <ul className="flex items-center hidden space-x-8 lg:flex">{listOfLinks(leftLinks)}</ul>}
                </div>
                {rightLinks && rightLinks.length > 0 && <ul className="flex items-center hidden space-x-8 lg:flex">{listOfLinks(rightLinks)}</ul>}
            </>
        );
    } else if (navBarLinksPosition === 'center') {
        return (
            <>
                {siteLogoLink({ companyName, navBarLinksPosition })}
                {leftLinks && leftLinks.length > 0 && <ul className="flex items-center hidden space-x-8 lg:flex">{listOfLinks(leftLinks)}</ul>}
                {rightLinks && rightLinks.length > 0 && <ul className="flex items-center hidden space-x-8 lg:flex">{listOfLinks(rightLinks)}</ul>}
            </>
        );
    } else if (navBarLinksPosition === 'right') {
        const links = (leftLinks || []).concat(rightLinks || []);
        return (
            <>
                {siteLogoLink({ companyName, navBarLinksPosition })}
                {links.length > 0 && <ul className="flex items-center hidden space-x-8 lg:flex">{listOfLinks(leftLinks.concat(rightLinks))}</ul>}
            </>
        );
    }
}

function siteLogoLink({ companyName, navBarLinksPosition }) {
    return (
        <Link href="/">
            <a
                aria-label={companyName}
                title={companyName}
                className={classNames('inline-flex items-center', {
                    'mr-8': navBarLinksPosition === 'left'
                })}
            >
                <Logo className="text-primary" />
                <span className="ml-2 text-xl font-bold tracking-wide uppercase text-dark">{companyName}</span>
            </a>
        </Link>
    );
}

function listOfLinks(links, inMenu = false) {
    return links.map((link, idx) => (
        <li key={idx}>
            <Link href={link.url}>
                <a
                    aria-label={link.alt}
                    title={link.alt}
                    className={
                        link.style !== 'button'
                            ? !inMenu
                                ? 'font-medium tracking-wide transition-colors duration-200 hover:text-primary text-light'
                                : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            : !inMenu
                            ? 'inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                            : 'inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                    }
                >
                    {link.label}
                </a>
            </Link>
        </li>
    ));
}
