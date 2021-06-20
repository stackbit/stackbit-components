import ReactMarkdown from 'react-markdown';
import Badge from '../badge';
import Button from '../button';
import Link from '../link';
import VideoPlay from '../../svgs/video-play';
import Graph from '../../svgs/graph';
import classNames from 'classnames';

export default function HeroSection({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return HeroImageHorizontal(props);
        case 'variant-b':
            return HeroImageVertical(props);
        case 'variant-c':
            return HeroVideo(props);
        case 'variant-d':
            return HeroSVG(props);
    }
    return null;
}

function HeroImageHorizontal(props) {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    {HeroContent(props)}
                    {HeroActions(props)}
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img src={props.imageUrl} className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full" alt="" />
            </div>
        </div>
    );
}

function HeroImageVertical(props) {
    return (
        <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
            <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
                {HeroContent(props)}
                {HeroActions(props)}
            </div>
            <div>
                <img src={props.imageUrl} className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm" alt="" />
            </div>
        </div>
    );
}

function HeroVideo(props) {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    {HeroContent(props)}
                    {HeroActions(props)}
                </div>
                <div className="relative lg:w-1/2">
                    <img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src={props.imageUrl} alt="" />
                    <a
                        href={props.videoUrl}
                        aria-label="Play Video"
                        className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                    >
                        <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                            <VideoPlay />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

function HeroSVG(props) {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    {HeroContent(props)}
                    {HeroActions(props)}
                </div>
                <div className="relative">
                    <Graph />
                </div>
            </div>
        </div>
    );
}

function HeroContent(props) {
    return (
        <div className="max-w-xl mb-6">
            {props.badge && (
                <div>
                    <Badge label={props.badge} />
                </div>
            )}
            <h2 className="header-2 max-w-lg mb-6">
                <ReactMarkdown components={components}>{props.title}</ReactMarkdown>
            </h2>
            <p className="text-paragraph text-base md:text-lg">{props.description}</p>
        </div>
    );
}

function HeroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className="flex flex-col items-center md:flex-row">
            {props.actions.map((action, idx) =>
                action.type === 'button' ? (
                    <Button key={idx} {...action} className="w-full mb-3 md:w-auto md:mr-4 md:mb-0" />
                ) : (
                    <Link
                        key={idx}
                        {...action}
                        className={classNames(
                            action.primary ? 'text-primary hover:text-primary-hover' : 'text-dark hover:text-dark-hover'
                        )}
                    />
                )
            )}
        </div>
    );
}

const components = {
    strong({ children }) {
        return <span className="inline-block text-primary">{children}</span>;
    }
};
