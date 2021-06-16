import Twitter from '../../svgs/twitter';
import Facebook from '../../svgs/facebook';

const icons = {
    twitter: Twitter,
    facebook: Facebook
};

import getThemeClass from './team-section.theme';

export default function TeamSection(props) {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                {props.badge && <p className={`inline-block px-3 mb-4 text-xs font-semibold tracking-wider text-primary-900 uppercase text-secondary-foreground bg-secondary ${getThemeClass('badge')}`}>{props.badge}</p>}
                {props.subtitle && <p className="text-base text-gray-700 md:text-lg">{props.subtitle}</p>}
            </div>
            <TeamVariants {...props} />
        </div>
    );
}

function TeamVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return TeamVariantA(props);
        case 'variant-b':
            return TeamVariantB(props);
    }
    return null;
}

function TeamVariantA(props) {
    return (
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
            {(props.team || []).map((person, idx) => (
                <div key={idx}>
                    <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                        <img className="absolute object-cover w-full h-full rounded" src={person.photo} alt="Person" />
                    </div>
                    <div className="flex flex-col sm:text-center">
                        <p className="text-lg font-bold">{person.name}</p>
                        <p className="mb-5 text-xs text-gray-800">{person.title}</p>
                        {person.social_links?.length > 0 && (
                            <div className="flex items-center space-x-3 sm:justify-center">
                                {person.social_links.map((link, idx) => (
                                    <a key={idx} href={link.url} className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                        {icons[link.type]()}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

function TeamVariantB(props) {
    return (
        <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
            {(props.team || []).map((person, idx) => (
                <div key={idx} className="grid sm:grid-cols-3">
                    <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                        <img className="absolute object-cover w-full h-full rounded" src={person.photo} alt="Person" />
                    </div>
                    <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                        <p className="text-lg font-bold">{person.name}</p>
                        <p className="mb-4 text-xs text-gray-800">{person.title}</p>
                        <p className="mb-4 text-sm tracking-wide text-gray-800">{person.bio}</p>
                        {person.social_links?.length > 0 && (
                            <div className="flex items-center space-x-3">
                                {person.social_links.map((link, idx) => (
                                    <a key={idx} href={link.url} className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                        {icons[link.type]()}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
