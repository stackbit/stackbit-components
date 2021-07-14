import Link from 'next/link';
import Logo from '../../svgs/logo';
import Twitter from '../../svgs/twitter';
import Instagram from '../../svgs/instagram';
import Facebook from '../../svgs/facebook';
import ReactMarkdown from 'react-markdown';

export default function Index(props) {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <Link href="/">
                        <a aria-label="Go home" title={props.companyName} className="inline-flex items-center">
                            <Logo className="text-primary" />
                            <span className="ml-2 text-xl font-bold tracking-wide text-dark uppercase">{props.companyName}</span>
                        </a>
                    </Link>
                    {props.companyInfo && (
                        <div className="mt-6 lg:max-w-sm text-sm text-dark prose">
                            <ReactMarkdown>{props.companyInfo}</ReactMarkdown>
                        </div>
                    )}
                </div>
                {props.companyContacts && <CompanyContacts {...props.companyContacts} />}
                {props.companySocial && <CompanySocial {...props.companySocial} />}
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                {props.copyrightText && <p className="text-sm text-gray-600">{props.copyrightText}</p>}
                {props.legalLinks && props.legalLinks.length > 0 && (
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        {props.legalLinks.map((link, idx) => (
                            <li key={idx}>
                                <a key={idx} href={link.url} className="text-sm text-gray-600 transition-colors duration-300 hover:text-primary">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

function CompanyContacts(props) {
    return (
        <div className="space-y-2 text-sm">
            {props.title && <p className="text-base font-bold tracking-wide text-gray-900">{props.title}</p>}
            {props.phoneLabel && props.phoneNumber && (
                <div className="flex">
                    <p className="mr-1 text-dark">{props.phoneLabel}</p>
                    <a
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAlt}
                        title={props.phoneAlt}
                        className="transition-colors duration-300 text-primary hover:text-primary-hover"
                    >
                        {props.phoneNumber}
                    </a>
                </div>
            )}
            {props.emailLabel && props.email && (
                <div className="flex">
                    <p className="mr-1 text-dark">{props.emailLabel}</p>
                    <a
                        href={`mailto:${props.email}`}
                        aria-label={props.emailAlt}
                        title={props.emailAlt}
                        className="transition-colors duration-300 text-primary hover:text-primary-hover"
                    >
                        {props.email}
                    </a>
                </div>
            )}
            {props.addressLabel && props.address && (
                <div className="flex">
                    <p className="mr-1 text-dark">{props.addressLabel}</p>
                    <a
                        href={`https://www.google.com/maps/search/${props.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={props.addressAlt}
                        title={props.addressAlt}
                        className="transition-colors duration-300 text-primary hover:text-primary-hover"
                    >
                        {props.address}
                    </a>
                </div>
            )}
        </div>
    );
}

function CompanySocial(props) {
    const iconMap = {
        twitter: Twitter,
        instagram: Instagram,
        facebook: Facebook
    };
    return (
        <div>
            <span className="text-base font-bold tracking-wide text-gray-900">{props.title}</span>
            {props.links && props.links.length > 0 && (
                <div className="flex items-center mt-1 space-x-3">
                    {props.links.map((link, idx) => {
                        const IconComponent = iconMap[link.icon];
                        if (!IconComponent) {
                            return null;
                        }
                        return (
                            <a key={idx} href={link.url} className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <IconComponent />
                            </a>
                        );
                    })}
                </div>
            )}
            {props.description && (
                <div className="mt-4 text-sm text-gray-500 prose">
                    <ReactMarkdown>{props.description}</ReactMarkdown>
                </div>
            )}
        </div>
    );
}
